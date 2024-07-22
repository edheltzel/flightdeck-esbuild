// @ts-check

/**
 * Markdown-it configuration
 * @module markdownIt
 * @requires markdown-it
 * @requires markdown-it-attrs
 */

const mdIt = require("markdown-it");
const mdItAttrs = require("markdown-it-attrs");

/**
 * @typedef {Object} MarkdownItOptions
 * @property {boolean} html - Enable HTML tags in source
 * @property {boolean} breaks - Convert '\n' in paragraphs into <br>
 * @property {boolean} linkify - Autoconvert URL-like text to links
 */

/** @type {MarkdownItOptions} */
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdownIt = mdIt(markdownItOptions).use(mdItAttrs);

exports.markdownIt = markdownIt;
