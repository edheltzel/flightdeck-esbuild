/**
 * Adds Scss support to eleventy
 * @param {Object} config - eleventy config object
 * @summary uses eleventy-sass plugin to process scss files
 * @see https://github.com/kentaroi/eleventy-sass/blob/main/docs/sass-options.md
 * @property loadPaths: ["node_modules/bootstrap/scss"],
 */
const isProd = process.env.ENV === "production";
const scssPlugin = require("eleventy-sass");
module.exports = (config) => {
  config.addPlugin(scssPlugin, [
    {
      sass: {
        style: "expanded",
        sourceMap: true
      },
    },
    {
      sass: {
        style: "compressed",
        sourceMap: false
      },
      when: [{ ENV: "production" }]
    }
  ]);
};
