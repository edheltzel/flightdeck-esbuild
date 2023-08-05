const esBuild = require("./transforms/esBuild");
const jamPack = require("./transforms/jamPack");

const isProd = process.env.ENVIRONMENT === "prod";

module.exports = (config) => {
  config.addPlugin(esBuild);

  if (isProd) {
    config.addPlugin(jamPack);
  }
};
