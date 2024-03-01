/**
 * Exports a function that runs BEFORE eleventy
 * @param {Object} config - eleventy config object
 * @summary This executes the esbuild tool on the output before build.
 * @link https://esbuild.github.io/api/#build-api
 * @link https://github.com/glromeo/esbuild-sass-plugin
 * @todo Update script to include more options
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
      format: 'esm',
      logLevel: 'warning',
      outbase: 'src/assets/js',
      metafile: true,
    });
  });
};

module.exports = { transformJs };
