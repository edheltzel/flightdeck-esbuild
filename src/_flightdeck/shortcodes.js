const copyright = require("./shortcodes/copyright");
const codepen = require("./shortcodes/codepen");

module.exports = (config) => {
  config.addShortcode("copyright", copyright);
  config.addShortcode("codepen", codepen);
};
