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
const blockquote = require("./shortcodes/blockquote");
const button = require("./shortcodes/buttonLink");
const codepen = require("./shortcodes/codepen");
const copyright = require("./shortcodes/copyright");
const image = require("./shortcodes/image");
const version = require("./shortcodes/flightdeck-version");
module.exports = (config) => {
  config.addShortcode("blockquote", blockquote);
  config.addShortcode("button", button);
  config.addShortcode("codepen", codepen);
  config.addShortcode("copyright", copyright);
  config.addShortcode("image", image);
  config.addShortcode("version", version);
};
