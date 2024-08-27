// @ts-check

/**
 * Transforms
 * @summary This adds custom transforms to Eleventy, keeping Eleventy in control of the entire development and build processes.
 *
 * @param {import("@11ty/eleventy").UserConfig} config - The Eleventy config object to which the transformations will be added.
 * @param {{useImageDirTransform: boolean}} options - Custom options for configuring transforms.
 *
 */

const isProd = process.env.ENV === "prod";
const { markdownIt } = require("./transforms/markdownIt"); // markdown-it plugins
const { transformImages } = require("./transforms/allimages"); // optimize all images in src/assets/images
const minifyHtml = require("./transforms/minifyHtml");
const { transformJs } = require("./transforms/esBuild"); // js bundling
const lightningCss = require("./transforms/lightning"); // css bundling

module.exports = (config, options) => {
  config.setLibrary("md", markdownIt);
  config.addPlugin(transformJs);
  // config.addPlugin(lightningCss);

  if (options.useImageDirTransform) {
    config.addPlugin(transformImages);
  }
  // production build only
  if (isProd) {
    config.addPlugin(minifyHtml);
  }
};
