const blockquote = require("./components/blockquote");
const button = require("./components/buttonLink");

module.exports = (config) => {
  config.addShortcode("blockquote", blockquote);
  config.addShortcode("button", button);
};
