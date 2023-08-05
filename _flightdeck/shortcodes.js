/**
 * Most shortcodes are handled by the 11ty plugin Embed Everything.
 * @link https://github.com/gfscott/eleventy-plugin-embed-everything/tree/main/packages/everything
 * Anything found here are additional shortcodes specific to your project and not found in the plugin.
 */
const codepen = require("./shortcodes/codepen");
const copyright = require("./shortcodes/copyright");
const theFold = require("./shortcodes/theFold");
const version = require("./shortcodes/version");

module.exports = (config) => {
  config.addShortcode("codepen", codepen);
  config.addShortcode("copyright", copyright);
  config.addShortcode("thefold", theFold);
  config.addShortcode("version", version);
};
