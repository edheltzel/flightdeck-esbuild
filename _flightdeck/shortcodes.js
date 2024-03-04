/**
 * Shortcodes
 * @summary This adds custom shortcodes for additional functionality.
 * @link https://www.11ty.dev/docs/shortcodes/
 *
 * @file
 * This module exports a function that adds several shortcodes to an Eleventy config object.
 *
 * @module shortcodes
 *
 * @param {Object} config - The Eleventy config object to which the shortcodes will be added.
 *
 */
const codepen = require("./shortcodes/codepen");
const copyright = require("./shortcodes/copyright");
const version = require("./shortcodes/version");
const image = require("./shortcodes/image");

module.exports = (config) => {
  config.addShortcode("codepen", codepen);
  config.addShortcode("copyright", copyright);
  config.addShortcode("version", version);
  config.addShortcode("Image", image);
};
