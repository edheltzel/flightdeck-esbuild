const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
exports.markdownLib = markdownLib;
