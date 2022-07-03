const fs = require("fs");
const isProd = process.env.ENVIRONMENT === "prod";

module.exports = (config) => {
  config.setQuietMode(true); // reduce console
  /**
   * @todo remove once 2.0 is released
   */
  config.setBrowserSyncConfig({
    open: false,
    notify: true,
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

  // Passthrough Copy
  config.addPassthroughCopy("./src/assets/fonts");
  if (!isProd) {
    config.addPassthroughCopy("./src/assets/images");
  }

  // Layout Aliases
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("post", "layouts/post.njk"); // consider using nunjucks extend
  config.addLayoutAlias("page", "layouts/page.njk"); // consider using nunjucks extend
};
