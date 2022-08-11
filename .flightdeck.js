// Eleventy Configuration
const addWorkflow = require("./src/_flightdeck/workflow");
const addFilters = require("./src/_flightdeck/filters");
const addShortcodes = require("./src/_flightdeck/shortcodes");
const addComponents = require("./src/_flightdeck/components");
const addTransforms = require("./src/_flightdeck/transforms");
const addPlugins = require("./src/_flightdeck/plugins");
const isProd = process.env.ENVIRONMENT === "prod";

module.exports = (config) => {
  addWorkflow(config);
  addFilters(config);
  addShortcodes(config);
  addComponents(config);
  addTransforms(config);
  addPlugins(config);

  // Watch Targets
  config.addWatchTarget("./src/assets");

  // Layout Aliases
  config.addLayoutAlias("page", "layouts/page.njk");

  // Passthrough Copy
  config.addPassthroughCopy({ "./node_modules/alpinejs/dist/cdn.min.js": "assets/js/alpine.js" });
  config.addPassthroughCopy("./src/assets/fonts");

  if (!isProd) {
    config.addPassthroughCopy("./src/assets/images"); //no image optimization during development
  }

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_includes/data",
    },
    markdownTemplateEngine: "njk",
  };
};
