// @ts-check

/**
 * Shortcodes
 * @summary This adds custom shortcodes for additional functionality.
 * @see https://www.11ty.dev/docs/shortcodes/
 *
 * @param {import("@11ty/eleventy").UserConfig} config - The Eleventy config object to which the shortcodes will be added.
 */
const blockquote = require("./shortcodes/blockquote");
const { button, buttonLink } = require("./shortcodes/buttons");
const codepen = require("./shortcodes/codepen");
const copyright = require("./shortcodes/copyright");
const image = require("./shortcodes/image");
const version = require("./shortcodes/flightdeck-version");
const email = require("./shortcodes/email");

module.exports = (config) => {
  config.addShortcode("blockquote", blockquote);
  config.addShortcode("button", button);
  config.addShortcode("link", buttonLink);
  config.addShortcode("codepen", codepen);
  config.addShortcode("copyright", copyright);
  config.addShortcode("image", image);
  config.addShortcode("version", version);
  config.addShortcode("email", email);
};
