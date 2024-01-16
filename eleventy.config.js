/**
 * Eleventy Configuration
 * @module .eleventy
 * @see {@link https://www.11ty.dev/docs/config/}
 * @param {Object} config - Eleventy's configuration object
 * @returns {Object} - Returns Eleventy's configuration options
 *
 * @const options - Custom options for Flightdeck
 * @type {Object}
 * @property {boolean} useImageTransform - Whether to use image transforms or not
 * @default true
 * @requires ./_flightdeck/transforms
 * @todo add more options
 */

const addWorkflow = require("./_flightdeck/workflow");
const addFilters = require("./_flightdeck/filters");
const addTransforms = require("./_flightdeck/transforms");
const addShortcodes = require("./_flightdeck/shortcodes");
const addPlugins = require("./_flightdeck/plugins");
const addComponents = require("./_flightdeck/components");

module.exports = (config) => {
  const options = {
    useImageTransform: false,
  };

  // Configure 11ty development server, layout aliases, watch, passthrough copy
  addWorkflow(config, options);

  // Custom plugins that integrate esbuild, scss, image optimization
  addTransforms(config, options);

  // Add eleventy plugins
  addPlugins(config);

  // Custom shortcodes for Nunjucks/Liquid template copyright year, youtube embeds, etc.
  addShortcodes(config);

  // Custom universal filters for Nunjucks/Liquid templates
  addFilters(config);

  // Custom components for Flightdeck Autopilot UI
  addComponents(config);

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
