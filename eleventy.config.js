/**
 * Eleventy Configuration
 * @module .eleventy
 * @see {@link https://www.11ty.dev/docs/config/}
 * @param {Object} config - Eleventy's configuration object
 * @returns {Object} - Returns Eleventy's configuration options
 * @requires ./_flightdeck/*
 *
 * @const options - Custom options for Flightdeck
 * @type {Object}
 * @property {boolean} useImageDirTransform - this will transform all images in ./src/assets/images
 * @default false - Set to true to use image transforms
 * @requires ./_flightdeck/transforms
 *
 * @todo add more options
 */

const addWorkflow = require("./_flightdeck/workflow");
const addFilters = require("./_flightdeck/filters");
const addTransforms = require("./_flightdeck/transforms");
const addShortcodes = require("./_flightdeck/shortcodes");
const addPlugins = require("./_flightdeck/plugins");

module.exports = (config) => {
  const options = {
    useImageDirTransform: false,
  };

  // Configure 11ty development server, layout aliases, watch, passthrough copy
  addWorkflow(config, options);

  // Custom plugins that integrate esbuild, scss, image optimization
  addTransforms(config, options);

  // Add eleventy plugins and configurations
  addPlugins(config);

  // Custom shortcodes for Nunjucks/Liquid template - ui components go here
  addShortcodes(config);

  // Custom universal filters for Nunjucks/Liquid templates
  addFilters(config);

  // 11ty configuration options
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_includes/data",
    },
    markdownTemplateEngine: "njk",
  };
};
