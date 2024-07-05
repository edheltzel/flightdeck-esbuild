/**
 * Universal filters
 * @summary This adds universal filters to the build process.
 * @link https://www.11ty.dev/docs/filters/
 *
 * @file
 * This module exports a function that adds several filters to an Eleventy config object.
 *
 * @module filters
 *
 * @param {Object} config - The Eleventy config object to which the filters will be added.
 */

const baseUrl = require("./filters/baseUrl");
const limit = require("./filters/postLimit");
const strip = require("./filters/stripFileExtension");
const date = require("./filters/dates");
const excerpt = require("./filters/excerpt");

module.exports = (config) => {
  config.addFilter("excerpt", excerpt);
  config.addFilter("postLimit", limit.postLimit);
  config.addFilter("removeExt", strip.stripFileExtension);
  config.addFilter("baseUrl", baseUrl);
  config.addFilter("postDate", date.postDate);
  config.addFilter("postDateTime", date.postDateTime);
};
