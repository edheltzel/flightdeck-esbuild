/**
 * Workflow Configuration
 * @summary keeps the main eleventy config file clean and is used to configure the local dev server.
 *
 * @param {Object} config - The Eleventy config object to be configured.
 * @property {Object} setServerOptions - Configure the local dev server.
 * @link https://github.com/11ty/eleventy/issues/1305
 * @see https://www.11ty.dev/docs/dev-server/
 * @description local dev server runs on port 8080 by default-> http://localhost:8080
 */

const fs = require("fs");

module.exports = (config, options) => {
  config.setQuietMode(true); // reduce console
  config.setServerOptions({
    port: 4000, // old habits die hard - 4000 is the default port for Jekyll ¯\_(ツ)_/¯
    showVersion: true, // show the server version number on the command line
    showAllHosts: false, // show local network IP address for device testing
  });

  /* --- Watch Targets --- */
  config.addWatchTarget("./src/assets");

  /* --- Passthrough Copy --- */
  config.addPassthroughCopy("./src/assets/fonts");
  config.addPassthroughCopy({ "./src/_static": "./" }); // root level files ie: _redirects, robots.txt, favicon.io,etc

  if (!options.useImageTransform) {
    config.addPassthroughCopy("./src/assets/images");
  }

  /* --- Layout Aliases --- */
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("page", "layouts/page.njk");
  config.addLayoutAlias("post", "layouts/post.njk");
};
