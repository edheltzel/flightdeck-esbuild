// esbuild & sass + autoprefixer
const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const postcssPresetEnv = require("postcss-preset-env");
const isProd = process.env.ENVIRONMENT === "prod";

module.exports = (config) => {
  config.on("eleventy.after", () => {
    return esbuild.build({
      bundle: true,
      entryPoints: {
        "assets/js/app": "./src/assets/js/app.js",
        "assets/css/app": "./src/assets/scss/app.scss",
      },
      loader: { ".scss": "css" },
      minify: isProd,
      outdir: "./dist",
      sourcemap: !isProd,
      plugins: [
        sassPlugin({
          async transform(source, resolveDir) {
            const { css } = await postcss([
              autoprefixer,
              postcssPresetEnv({ stage: 0 }),
            ]).process(source, { from: undefined });
            return css;
          },
        }),
      ],
    });
  });
};
