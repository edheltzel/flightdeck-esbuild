const fs = require("fs");

module.exports = (config) => {
  config.setQuietMode(true); // reduce console
  config.setServerOptions({
    /**
     * @link https://github.com/11ty/eleventy/issues/1305
     * @see https://www.11ty.dev/docs/dev-server/
     * @description local dev server runs on port 8080 by default-> http://localhost:8080
    */
    showVersion: true, // show the server version number on the command line
    showAllHosts: true, // show local network IP address for device testing
  });

  /* --- Watch Targets --- */
  config.addWatchTarget("./src/assets");

  /* --- Passthrough Copy --- */
  config.addPassthroughCopy("./src/assets", {
    ignore: ["**/styles/**/*", "**/js/**/*"],
  }); // copy static files except styles and scripts - esbuild handles those
  // config.addPassthroughCopy({ "./node_modules/alpinejs/dist/cdn.min.js": "assets/js/alpine.js" });

  /* --- Layout Aliases --- */
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("page", "layouts/page.njk");
  config.addLayoutAlias("post", "layouts/post.njk");
};
