// @ts-check

/**
 * Eleventy plugins that modify content
 * @summary This adds eleventy plugins to the build process.
 * @see https://www.11ty.dev/docs/plugins/
 *
 * @param {import("@11ty/eleventy").UserConfig} config - The Eleventy config object to which the plugins will be added.
 */

const embedEverything = require("eleventy-plugin-embed-everything");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const navigation = require("@11ty/eleventy-navigation");

module.exports = (config) => {
  config.addPlugin(embedEverything);
  config.addPlugin(syntaxHighlight);
  config.addPlugin(navigation);
};
