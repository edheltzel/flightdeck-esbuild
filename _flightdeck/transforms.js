const esBuildAssets = require("./transforms/esBuildAssets");
const minifyHtml = require("./transforms/minifyHtml");
const buildImages = require("./transforms/buildImages");

const isProd = process.env.ENVIRONMENT === "prod";

module.exports = (config) => {
  config.addPlugin(esBuildAssets);

  if (isProd) {
    config.addPlugin(buildImages);
    config.addPlugin(minifyHtml);
  }
};
