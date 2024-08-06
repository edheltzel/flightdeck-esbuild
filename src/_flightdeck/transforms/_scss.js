 // @ts-check

/**
 * Process Scss
 * @description If you want to use Sass/Scss in your project, you can add this module to the transforms.js
*
* @module scss
* @requires eleventy-sass
* @requires postcss
* @requires autoprefixer
* @requires css-declaration-sorter
* @example const { transformScss } = require("./transforms/_scss");
* @see {@link https://github.com/kentaroi/eleventy-sass/blob/main/docs/sass-options.md}
 */

const scss = require("eleventy-sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssDeclarationSorter = require("css-declaration-sorter");

/**
 * @typedef {import('@11ty/eleventy').UserConfig} EleventyConfig
 */

/**
 * Adds the SCSS transform to the Eleventy config.
 * @param {EleventyConfig} config - The Eleventy configuration object.
 */
const transformScss = (config) => {
  config.addPlugin(scss, [
    {
      sass: {
        style: "expanded",
        sourceMap: false,
        loadPaths: ["node_modules/@picocss/pico/scss", "node_modules/@picocss/pico/scss/themes/default"],
      },
    },
    {
      sass: {
        style: "compressed",
        sourceMap: false,
        loadPaths: ["node_modules/@picocss/pico/scss", "node_modules/@picocss/pico/scss/themes/default"],
      },
      postcss: postcss([autoprefixer, cssDeclarationSorter({ order: "concentric-css" })]),
      when: [{ ENV: "prod" }],
    },
  ]);
};

module.exports = {
  transformScss,
};
