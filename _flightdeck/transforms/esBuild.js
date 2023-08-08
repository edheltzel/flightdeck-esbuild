/**
 * Exports a function that runs BEFORE eleventy
 * @param {Object} config - eleventy config object
 * @summary This executes the esbuild tool on the output before build.
 * @link https://esbuild.github.io/api/#build-api
 * @link https://github.com/glromeo/esbuild-sass-plugin
 */
const isProd = process.env.ENV === "production";
const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const postcss = require("postcss");
const cssDeclarationSorter = require("css-declaration-sorter");
const postcssPresetEnv = require("postcss-preset-env");
// TODO: need more testing of eleventy.before causes issues with --incremental builds
module.exports = (config) => {
  const flightdeck = console.log('\x1b[33m%s\x1b[0m', '[Flightdeck] ' + '>> esbuild complete');
  config.on("eleventy.after", async () => {
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
        sassPlugin({
          async transform(source, resolveDir) {
            let plugins = [];
            if (isProd) {
              plugins = [
                postcss([cssDeclarationSorter({ order: "smacss" })]),
                postcssPresetEnv({ stage: 0 }),
              ];
            }
            const { css } = await postcss(plugins).process(source, { from: undefined });
            return css;
          },
        }),
      ]
    });
    return flightdeck;
  });
};
