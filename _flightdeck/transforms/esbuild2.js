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
const path = require('node:path');

const transformJs = (config) => {
  config.addTemplateFormats('js');
  config.addExtension('js', {
    outputFileExtension: 'js',
    async compile(inputContent, inputPath) {
      const baseDir = path.basename(path.dirname(inputPath));
      if (baseDir.startsWith('_')) {
        return undefined;
      }
      const result = await esbuild.build({
        entryPoints: [inputPath],
        bundle: true,
        minify: isProd,
        sourcemap: !isProd,
        splitting: true,
        format: 'esm',
        logLevel: 'info',
        outdir: 'dist/assets/js',
        outbase: 'src/assets/js',
        metafile: true,
      });

      const files = [];
      const inputs = Object.values(result.metafile.inputs);
      for (const input of inputs) {
        const { imports } = input;
        if (imports.length) {
          for (const file of imports) {
            files.push(file.path);
          }
        }
      }
      this.addDependencies(inputPath, files);
      return () => result.js;
    },
  });
};

module.exports = { transformJs };
