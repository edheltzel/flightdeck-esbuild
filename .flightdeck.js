// Eleventy Configuration
const addWorkflow = require("./.flightdeck/workflow");
const addFilters = require("./.flightdeck/filters");
const addTransforms = require("./.flightdeck/transforms");
const addShortcodes = require("./.flightdeck/shortcodes");
const addPlugins = require("./.flightdeck/plugins");
const addComponents = require("./.flightdeck/components");

module.exports = (config) => {
  addWorkflow(config); // browsersync, layout aliases, watch, passthrough copy
  addFilters(config); // universal filters
  addTransforms(config); // htmlmin, ESbuild, image transforms
  addShortcodes(config); // copyright year, youtube embeds, etc.
  addPlugins(config); // eleventy plugins
  addComponents(config); // custom components for Flightdeck Airframe

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_includes/data",
    },
    markdownTemplateEngine: "njk",
  };
};
