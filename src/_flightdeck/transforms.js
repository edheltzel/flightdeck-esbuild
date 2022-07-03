const esBundle = require("./transforms/esBundle");
const minifyHtml = require("./transforms/minifyHtml");
const buildImages = require("./transforms/buildImages");

const isProd = process.env.ENVIRONMENT === "prod";

module.exports = (config) => {
  config.addPlugin(esBundle);

  if (isProd) {
    config.addPlugin(buildImages);
    config.addPlugin(minifyHtml);
  }
};
