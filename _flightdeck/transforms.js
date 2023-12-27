/**
 * Transforms
 * @summary This adds custom transforms to Eleventy, keeping Eleventy in control of the entire development and build processes.
 *
 *
 * @file
 * This module exports a function that adds several transformations to an Eleventy config object.
 *
 * @module transforms
 *
 * @param {Object} config - The Eleventy config object to which the transformations will be added.
 *
 */
const isProd = process.env.ENV === "production";
const { markdownIt } = require("./transforms/markdownIt"); // markdown-it plugins
const esBuild = require("./transforms/esBuild"); // s bundling
const scss = require("./transforms/scss"); // scss compiling
const images = require("./transforms/images"); // image optimization
module.exports = (config) => {
  config.setLibrary("md", markdownIt);
  config.addPlugin(esBuild);
  config.addPlugin(scss);
  config.addPlugin(images);
};
