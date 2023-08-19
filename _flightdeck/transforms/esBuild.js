/**
 * Exports a function that runs BEFORE eleventy
 * @param {Object} config - eleventy config object
 * @summary This executes the esbuild tool on the output before build.
 * @link https://esbuild.github.io/api/#build-api
 * @link https://github.com/glromeo/esbuild-sass-plugin
 */
const { hrtime } = require('process');
const isProd = process.env.ENV === "production";
const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
module.exports = (config) => {
  config.on("eleventy.after", async () => {
    console.time('esbuild');
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
    process.stdout.write('\x1b[33m[Flightdeck] >> completed  \x1b[0m');
    console.timeEnd('esbuild');
    const timeInfo = console.timeLog('esbuild');
    process.stdout.write(` (${timeInfo} )\n`);
  });
};
