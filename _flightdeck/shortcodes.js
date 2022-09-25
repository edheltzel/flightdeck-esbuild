const copyright = require("./shortcodes/copyright");
const codepen = require("./shortcodes/codepen");
const version = require("./shortcodes/version");
module.exports = (config) => {
  config.addShortcode("copyright", copyright);
  config.addShortcode("codepen", codepen);
  config.addShortcode("version", version);
};
