// minify HTML
const htmlmin = require("html-minifier");

module.exports = (config) => {
  config.addTransform("htmlMin", async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
      });
      return minified;
    }
    return content;
  });
};
