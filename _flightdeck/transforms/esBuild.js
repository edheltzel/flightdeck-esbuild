/**
 * Exports a function that runs BEFORE eleventy
 * @param {Object} config - eleventy config object
 * @summary This executes the esbuild tool on the output before build.
 * @link https://esbuild.github.io/api/#build-api
 * @link https://github.com/glromeo/esbuild-sass-plugin
 */
const chalk = require('kleur');
const flightdeck = require('../../package.json');
const isProd = process.env.ENV === "production";
const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
module.exports = (config) => {
  config.on("eleventy.after", async () => {
    const startTime = Date.now();
    await esbuild.build({
      bundle: true,
      entryPoints: {
        "assets/js/app": "./src/assets/js/app.js",
        "assets/styles/style": "./src/assets/styles/style.scss",
      },
      loader: { ".scss": "css" },
      minify: isProd,
      outdir: "./dist",
      sourcemap: !isProd,
      plugins: [
        sassPlugin(),
      ]
    });
    const endTime = (Date.now() - startTime) / 1000;
    console.log(chalk.yellow(`[Flightdeck] >> esbuild finished in ${endTime} seconds (${endTime * 1000}ms, v${flightdeck.version})`));
  });
};
