/**
 * This module adds Scss support to eleventy using the eleventy-sass plugin.
 * It also uses PostCSS and Autoprefixer for processing CSS.
 * @module scss
 * @see {@link https://github.com/kentaroi/eleventy-sass/blob/main/docs/sass-options.md}
 *
 * @summary uses eleventy-sass plugin to process scss files
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

const transformScss = (config) => {
  const devOptions = {
    sass: {
      style: "expanded",
      sourceMap: true,
      loadPaths: ["./node_modules/@picocss/pico/scss/pico", "./src/assets/styles"],
    },
    postcss: postcss([autoprefixer]),
  };

  const prodOptions = {
    sass: {
      style: "compressed",
      sourceMap: false,
      loadPaths: ["./node_modules/@picocss/pico/scss/pico"],
    },
    when: [{ ENV: "production" }],
  };

  // console.log('Development loadPaths:', devOptions.sass.loadPaths);
  // console.log('Production loadPaths:', prodOptions.sass.loadPaths);

  config.addPlugin(scss, [devOptions, prodOptions]);
};

module.exports = {
  transformScss,
};
