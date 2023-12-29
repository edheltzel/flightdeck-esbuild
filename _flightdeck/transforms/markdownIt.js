/**
 * This module configures and exports an instance of markdown-it with additional attributes support.
 * @module markdownIt
 * @see {@link https://github.com/markdown-it/markdown-it}
 * @see {@link https://github.com/arve0/markdown-it-attrs}
 *
 * Configuration options for markdown-it.
 * @type {Object} markdownItOptions
 * @property {boolean} html - Enable HTML tags in source. Default is true.
 * @property {boolean} breaks - Convert '\n' in paragraphs into <br>. Default is true.
 * @property {boolean} linkify - Autoconvert URL-like text to links. Default is true.
 * @see {@link https://markdown-it.github.io/markdown-it/#MarkdownIt.new} for more options.
 */

const mdIt = require("markdown-it");
const mdItAttrs = require("markdown-it-attrs");

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdownIt = mdIt(markdownItOptions).use(mdItAttrs);

exports.markdownIt = markdownIt;
