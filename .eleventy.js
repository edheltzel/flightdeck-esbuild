// Eleventy Configuration
const addWorkflow = require("./src/_flightdeck/workflow");
const addFilters = require("./src/_flightdeck/filters");
const addShortcodes = require("./src/_flightdeck/shortcodes");
const addTransforms = require("./src/_flightdeck/transforms");
const addPlugins = require("./src/_flightdeck/plugins");

module.exports = (config) => {
  addWorkflow(config);
  addFilters(config);
  addShortcodes(config);
  addTransforms(config);
  addPlugins(config);
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_includes/data",
    },
    markdownTemplateEngine: "njk",
  };
};
