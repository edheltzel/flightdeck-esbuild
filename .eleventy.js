const addTransforms = require("./src/_flightdeck/transforms");
const addWorkflow = require("./src/_flightdeck/workflow");
const addShortcodes = require("./src/_flightdeck/shortcodes");
const addFilters = require("./src/_flightdeck/filters");
const addPlugins = require("./src/_flightdeck/plugins");
module.exports = (config) => {
  addWorkflow(config); // workflow - browsersync, layout aliases, watch, passthrough copy
  addTransforms(config); // transforms - esbuild, sass, htmlmin
  addFilters(config); // filters - universal filters
  addShortcodes(config); // shortcodes - copyright year, youtube embeds, etc.
  addPlugins(config); // plugins - eleventy plugins
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_includes/data",
    },
    markdownTemplateEngine: "njk",
  };
};
