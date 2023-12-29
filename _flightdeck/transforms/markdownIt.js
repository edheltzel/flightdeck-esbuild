/**
 * This module configures and exports an instance of markdown-it with additional attributes support.
 * @module markdownIt
 * @see {@link https://github.com/markdown-it/markdown-it|markdown-it}
 * @see {@link https://github.com/arve0/markdown-it-attrs|markdown-it-attrs}
 */
const mdIt = require("markdown-it");
const mdItAttrs = require("markdown-it-attrs");

/**
 * Configuration options for markdown-it.
 * @type {Object}
 * @property {boolean} html - Enable HTML tags in source. Default is true.
 * @property {boolean} breaks - Convert '\n' in paragraphs into <br>. Default is true.
 * @property {boolean} linkify - Autoconvert URL-like text to links. Default is true.
 */
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

/**
 * An instance of markdown-it configured with the options defined above and additional attributes support.
 * @type {Object}
 */
const markdownIt = mdIt(markdownItOptions).use(mdItAttrs);

exports.markdownIt = markdownIt;
