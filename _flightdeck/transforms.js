/**
 * This module configures and exports a function that sets up various transformations for a given configuration.
 *
 * @module transforms
 *
 * @requires module:./transforms/markdownIt - Markdown-it plugins for transforming markdown files.
 * @requires module:./transforms/esBuild - ESBuild for compiling JavaScript and bundling assets.
 * @requires module:./transforms/scss - SCSS compiler for transforming SCSS files into CSS.
 * @requires module:./transforms/images - Image optimization tools for optimizing image assets.
 *
 * @param {Object} config - The configuration object to which transformations will be added.
 *
 * @returns {void} - The function does not have a return value; it modifies the passed configuration object.
 */

const isProd = process.env.ENV === "production";
const { markdownIt } = require("./transforms/markdownIt"); // markdown-it plugins
const esBuild = require("./transforms/esBuild"); // js bundling
const scss = require("./transforms/scss"); // scss compiling
const images = require("./transforms/images"); // image optimization
module.exports = (config) => {
  config.setLibrary("md", markdownIt);
  config.addPlugin(esBuild);
  config.addPlugin(scss);
  config.addPlugin(images);
};
