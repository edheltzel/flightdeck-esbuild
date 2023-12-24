/**
 * Transforms
 * @param {Object} config - eleventy config object
 * @description jamPack will increase build time dramatically.
 *
 */
const isProd = process.env.ENV === "production";
// const jamPack = require("./transforms/jamPack"); // PROD only image and html optimization
const { markdownIt } = require("./transforms/markdownIt"); // markdown-it plugins
const esBuild = require("./transforms/esBuild"); // scss compiling & js bundling
const scss = require("./transforms/scss"); // scss compiling
const images = require("./transforms/images"); // image optimization

module.exports = (config) => {
  config.setLibrary("md", markdownIt);
  config.addPlugin(scss);
  config.addPlugin(esBuild);
  config.addPlugin(
    images({
      silentSkip: true,
      lessVerbose: true,
      srcDir: "src/assets/images",
      destDir: "dist/assets/images",
    }),
  ); // Pass silentSkip option

  // if (isProd) {
  // config.addPlugin(jamPack);
  // }
};
