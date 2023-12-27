/**
 * This module exports a function that configures a server and sets up watch targets, passthrough copies, and layout aliases for a web application.
 *
 * @module workflow
 *
 * @param {Object} config - The configuration object for the server.
 *
 * @property {Function} config.setQuietMode - Sets the server to quiet mode to reduce console output.
 * @property {Function} config.setServerOptions - Sets options for the server.
 * @property {Function} config.addWatchTarget - Adds a directory or file to be watched for changes.
 * @property {Function} config.addPassthroughCopy - Adds a directory or file to be copied directly to the output folder.
 * @property {Function} config.addLayoutAlias - Adds an alias for a layout.
 *
 */

const fs = require("fs");

module.exports = (config) => {
  config.setQuietMode(true);
  config.setServerOptions({
    /**
     * @link https://github.com/11ty/eleventy/issues/1305
     * @see https://www.11ty.dev/docs/dev-server/
     * @description local dev server runs on port 8080 by default-> http://localhost:8080
     */
    port: 4000,
    showVersion: true, // show the server version number on the command line
    showAllHosts: false, // show local network IP address for device testing
  });

  /* --- Watch Targets --- */
  config.addWatchTarget("./src/assets");

  /* --- Passthrough Copy --- */
  config.addPassthroughCopy("./src/assets/fonts");
  // config.addPassthroughCopy("./src/assets/images");
  config.addPassthroughCopy({ "./src/_static": "./" }); // root level files ie: _redirects, robots.txt, favicon.io,etc

  /* --- Layout Aliases --- */
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("page", "layouts/page.njk");
  config.addLayoutAlias("post", "layouts/post.njk");
};
