/**
 * ESBuild Transform function
 * @summary This includes JS files as a template format for 11ty.
 * @callback transformJs
 * @param {Object} config - eleventy config object
 * @async 11ty will compile all JS files unless the directory begins with an underscore
 * @link https://esbuild.github.io/api/#build-api
 */

const isProd = process.env.ENV === "production";
const esbuild = require("esbuild");
const path = require("node:path");

const transformJs = (config) => {
  config.addTemplateFormats("js");
  config.addExtension("js", {
    outputFileExtension: "js",
    async compile(inputContent, inputPath) {
      // Check if any directory in the path starts with an underscore
      if (inputPath.split(path.sep).some(component => component.startsWith('_'))) {
        return undefined;
      }

      const result = await esbuild.build({
        entryPoints: [inputPath],
        bundle: true,
        minify: isProd,
        sourcemap: !isProd,
        splitting: true,
        format: "esm",
        logLevel: "warning",
        outdir: "dist/assets/js",
        outbase: "src/assets/js",
        metafile: true,
      });

      const files = new Set();
      for (const { imports } of Object.values(result.metafile.inputs)) {
        for (const { path: filePath } of imports) {
          files.add(filePath);
        }
      }

      this.addDependencies(inputPath, Array.from(files));
      return () => result.js;
    },
  });
};

module.exports = { transformJs };
