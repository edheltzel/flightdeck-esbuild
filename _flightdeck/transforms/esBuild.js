/**
 * ESBuild Transform function
 * @callback transformJs
 * @param {Object} config - eleventy config object
 * @async eleventy.after hook to run esbuild
 * @summary This executes the esbuild on the output after the eleventy build.
 * @link https://esbuild.github.io/api/#build-api
 */
const isProd = process.env.ENV === "production";
const esbuild = require("esbuild");

const transformJs = (config) => {
  config.on("eleventy.after", async () => {
    await esbuild.build({
      entryPoints: { "assets/js/app": "./src/assets/js/app.js" },
      bundle: true,
      outdir: "dist",
      minify: isProd,
      sourcemap: !isProd,
      splitting: true,
      format: "esm",
      logLevel: "info",
      metafile: true,
    });
  });
};

module.exports = { transformJs };
