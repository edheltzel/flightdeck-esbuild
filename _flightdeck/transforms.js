/**
 * Transforms
 * @summary This adds custom transforms to Eleventy, keeping Eleventy in control of the entire development and build processes.
 *
 * @file
 * This module exports a function that adds several transformations to an Eleventy config object.
 *
 * @module transforms
 *
 * @param {Object} config - The Eleventy config object to which the transformations will be added.
 * @param {boolean} useImageDirTransform - Whether or not to use image transforms (default: true).
 *
 * @todo drop scss for css + lightningCSS
 */

const isProd = process.env.ENV === "production";
const { markdownIt } = require("./transforms/markdownIt"); // markdown-it plugins
const { transformJs } = require("./transforms/esBuild"); // js bundling
const { transformStyles } = require("./transforms/styles"); // scss compiling
const { transformImageDir } = require("./transforms/allimages"); // optimize all images in src/assets/images
module.exports = (config, options) => {
  config.setLibrary("md", markdownIt);
  config.addPlugin(transformJs);
  config.addPlugin(transformStyles);
  if (options.useImageDirTransform) {
    config.addPlugin(transformImageDir);
  }
};
