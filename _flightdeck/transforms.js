/**
 * Transforms
 * @param {Object} config - eleventy config object
 *
 */
const isProd = process.env.ENV === "production";
const { markdownLib } = require("./transforms/markdownLib");
const esBuild = require("./transforms/esBuild"); // scss compiling & js bundling
const jamPack = require("./transforms/jamPack"); // image optimization

module.exports = (config) => {
  config.setLibrary("md", markdownLib);
  config.addPlugin(esBuild);

  if (isProd) {
    config.addPlugin(jamPack);
  }
};
