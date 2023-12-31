// Eleventy Configuration
const addWorkflow = require("./_flightdeck/workflow");
const addFilters = require("./_flightdeck/filters");
const addTransforms = require("./_flightdeck/transforms");
const addShortcodes = require("./_flightdeck/shortcodes");
const addPlugins = require("./_flightdeck/plugins");
const addComponents = require("./_flightdeck/components");

module.exports = (config) => {
  const options = {
    useImageTransform: true,
  };
  addWorkflow(config, options); // dev server, layout aliases, watch, passthrough copy
  addTransforms(config, options); // esbuild, scss, image optimization
  addPlugins(config); // eleventy plugins
  addShortcodes(config); // copyright year, youtube embeds, etc.
  addFilters(config); // universal filters
  addComponents(config); // custom components for Flightdeck Airframe

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
