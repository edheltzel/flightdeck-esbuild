const isProd = process.env.ENV === "production";
const esBuild = require("./transforms/esBuild"); // scss compiling & js bundling
const jamPack = require("./transforms/jamPack"); // image optimization

const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

module.exports = (config) => {
  config.setLibrary("md", markdownLib);
  config.addPlugin(esBuild);

  if (isProd) {
    config.addPlugin(jamPack);
  }
};
