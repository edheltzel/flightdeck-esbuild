/**
 * Universal filters
 * @param {Object} config - eleventy config object
 * @summary This adds universal filters to the build process.
 * @link https://www.11ty.dev/docs/filters/
 */
const baseUrl = require("./filters/baseUrl");
const limit = require("./filters/postLimit");
const strip = require("./filters/stripFileExtension");
const date = require("./filters/dates");
const excerpt = require("./filters/excerpt");

module.exports = (config) => {
  config.addFilter("excerpt", excerpt);
  config.addFilter("postLimit", limit.postLimit);
  config.addFilter("stripExt", strip.stripFileExtension);
  config.addFilter("baseUrl", baseUrl);
  config.addFilter("postDate", date.postDate);
  config.addFilter("postDateTime", date.postDateTime);
};
