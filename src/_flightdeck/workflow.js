const fs = require("fs");
const isProd = process.env.ENVIRONMENT === "prod";

module.exports = (config) => {
  config.setQuietMode(true); // reduce console
  /**
   * @todo remove once 2.0 is released
   */
  config.setBrowserSyncConfig({
    open: false,
    notify: false,
    // 404
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("dist/404/index.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  // Watch Targets
  config.addWatchTarget("./src/assets");

  // Layout Aliases
  config.addLayoutAlias("page", "layouts/page.njk");

  // Passthrough Copy
  config.addPassthroughCopy({ "./node_modules/alpinejs/dist/cdn.min.js": "assets/js/alpine.js" }); // AlpineJS
  config.addPassthroughCopy("./src/assets/fonts");
  if (!isProd) {
    config.addPassthroughCopy("./src/assets/images"); //no image optimization during development
  }
};
