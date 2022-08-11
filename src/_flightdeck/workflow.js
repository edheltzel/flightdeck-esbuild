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

};
