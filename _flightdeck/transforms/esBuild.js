// esbuild & sass + autoprefixer

const isProd = process.env.ENV === "production";
const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const postcss = require("postcss");
const cssDeclarationSorter = require("css-declaration-sorter");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = (config) => {
  config.on("eleventy.before", async () => {
    try{
      await esbuild.build({
        bundle: true,
        entryPoints: {
          "assets/js/app": "./src/assets/js/app.js",
          "assets/styles/style": "./src/assets/styles/style.scss",
        },
        loader: { ".scss": "css" },
        // minify: isProd, // NOTE: minification is handled by cloudflare auto minify
        outdir: "./dist",
        sourcemap: !isProd,
        plugins: [
          sassPlugin({
            async transform(source, resolveDir) {
              const { css } = await postcss([
                postcss([cssDeclarationSorter({ order: "smacss" })]),
                postcssPresetEnv({ stage: 0 }),
              ]).process(source, { from: undefined });
              return css;
            },
          }),
        ]
      });
      console.log('%cesbuild complete', 'color: cyan');
    } catch (error) {
      console.log("%cesbuild error", 'color: red', error); //TODO: better error handling
    };

  });
};
