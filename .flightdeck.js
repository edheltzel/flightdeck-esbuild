// Eleventy Configuration
const addWorkflow = require("./.flightdeck/workflow");
const addFilters = require("./.flightdeck/filters");
const addTransforms = require("./.flightdeck/transforms");
const addShortcodes = require("./.flightdeck/shortcodes");
const addPlugins = require("./.flightdeck/plugins");
const addComponents = require("./.flightdeck/components");
const isProd = process.env.ENVIRONMENT === "prod";

module.exports = (config) => {
  addWorkflow(config);
  addFilters(config);
  addTransforms(config);
  addShortcodes(config);
  addPlugins(config);
  addComponents(config);


  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_includes/data",
    },
    markdownTemplateEngine: "njk",
  };
};
