/**
 * Transforms
 * @param {Object} config - eleventy config object
 *
 */
const isProd = process.env.ENV === "production";
const { markdownIt } = require("./transforms/markdownIt"); // markdown-it plugins
const esBuild = require("./transforms/esBuild"); // scss compiling & js bundling
const jamPack = require("./transforms/jamPack"); // image optimization

module.exports = (config) => {
  config.setLibrary("md", markdownIt);
  config.addPlugin(esBuild);

  if (isProd) {
    config.addPlugin(jamPack);
  }
};
