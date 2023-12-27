/**
 * Workflow Configuration
 * @summary keeps the main eleventy config file clean and is used to configure the local dev server and build directory.
 *
 * @file
 * This module exports a function that configures an Eleventy project.
 *
 * @module workflow
 *
 * @requires fs
 *
 * @param {Object} config - The Eleventy config object to be configured.
 *
 */

const fs = require("fs");

module.exports = (config) => {
  config.setQuietMode(true); // reduce console
  config.setServerOptions({
    /**
     * @link https://github.com/11ty/eleventy/issues/1305
     * @see https://www.11ty.dev/docs/dev-server/
     * @description local dev server runs on port 8080 by default-> http://localhost:8080
     */
    port: 4000, // old habits die hard - 4000 is the default port for Jekyll
    showVersion: true, // show the server version number on the command line
    showAllHosts: false, // show local network IP address for device testing
  });

  /* --- Watch Targets --- */
  config.addWatchTarget("./src/assets");

  /* --- Passthrough Copy --- */
  config.addPassthroughCopy("./src/assets/fonts");
  config.addPassthroughCopy({ "./src/_static": "./" }); // root level files ie: _redirects, robots.txt, favicon.io,etc

  /* --- Layout Aliases --- */
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("page", "layouts/page.njk");
  config.addLayoutAlias("post", "layouts/post.njk");
};
