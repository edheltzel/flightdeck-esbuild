/**
 * Flightdeck's Autopilot UI Components
 * @summary This adds custom ui components for Autopilot design system.
 * @link https://www.11ty.dev/docs/shortcodes/
 *
 * @file
 * This module exports a function that adds several shortcodes to an Eleventy config object.
 *
 * @module components
 *
 * @param {Object} config - eleventy config object
 *
 */

const blockquote = require("./components/blockquote");
const button = require("./components/buttonLink");
const version = require("./components/flightdeck-version");
module.exports = (config) => {
  config.addShortcode("blockquote", blockquote);
  config.addShortcode("button", button);
  config.addShortcode("version", version);
};
