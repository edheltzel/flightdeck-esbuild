// @ts-check

/**
 * Minify HTML
 * @module minifyHtml
 * @requires html-minifier
 */

const htmlmin = require("html-minifier");

/**
 * @typedef {import('@11ty/eleventy').UserConfig} EleventyConfig
 */

/**
 * Adds HTML minification transform to Eleventy.
 * @param {EleventyConfig} config - The Eleventy configuration object.
 */
module.exports = (config) => {
  config.addTransform("htmlMin", async (content, outputPath) => {
    if (outputPath?.endsWith(".html")) {
      const minified = htmlmin.minify(content, {
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
      });
      return minified;
    }
    return content;
  });
};
