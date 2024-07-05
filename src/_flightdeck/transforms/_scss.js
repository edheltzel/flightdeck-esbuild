/**
 * Process Scss
 *
 * @description If you want to use Sass/Scss in your project, you can add this module to the transforms.js
* @example const { transformScss } = require("./transforms/_scss");
* @requires eleventy-sass {@link https://github.com/kentaroi/eleventy-sass}
* @requires sass {@link https://www.npmjs.com/package/sass} required by eleventy-sass
* @requires postcss {@link https://www.npmjs.com/package/postcss} optional plugin for eleventy-sass
* @requires autoprefixer {@link https://www.npmjs.com/package/autoprefixer} required by postcss
* @requires css-declaration-sorter {@link https://www.npmjs.com/package/css-declaration-sorter} required by postcss
* @see {@link https://github.com/kentaroi/eleventy-sass/blob/main/docs/sass-options.md}
*
 * @module scss
 * @summary uses eleventy-sass plugin to process scss
 * @link https://github.com/kentaroi/eleventy-sass
 *
 * @param {Object} config - eleventy config object
 * @property {Object} sass - Sass options
 * @property {Array} postcss - add PostCSS plugins ie: AutoPrefixer
 * @property {Object} when - Conditional options
 *
 * @property {Array} loadPaths - Array of paths to include in the sass compilation.
 * @description You can load Bootstrap's Scss file with @import "bootstrap"; by adding the following:
 * @example loadPaths: ["node_modules/bootstrap/scss"],
 */

const scss = require("eleventy-sass");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");
const cssDeclarationSorter = require("css-declaration-sorter");

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
      when: [{ ENV: "production" }],
    },
  ]);
};

module.exports = {
  transformScss,
};
