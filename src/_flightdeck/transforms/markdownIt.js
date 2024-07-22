// @ts-check

/**
 * Markdown-it configuration
 * @module markdownIt
 * @requires markdown-it
 * @requires markdown-it-attrs
 * @requires markdown-it-bra
 *
 * @see {@link https://github.com/markdown-it/markdown-it}
 * @see {@link https://github.com/arve0/markdown-it-attrs}
 * @see {@link https://github.com/mb21/markdown-it-bracketed-spans}
 */

const mdIt = require("markdown-it");
const mdItAttrs = require("markdown-it-attrs");
const mdItBracketedSpans = require("markdown-it-bracketed-spans");
/**
 * @typedef {Object} MarkdownItOptions
 * @property {boolean} html - Enable HTML tags in source
 * @property {boolean} breaks - Convert '\n' in paragraphs into <br>
 * @property {boolean} linkify - Autoconvert URL-like text to links
 * @see {@link https://markdown-it.github.io/markdown-it/#MarkdownIt.new} for more options.
 */

/** @type {MarkdownItOptions} */
const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true,
};

const markdownIt = mdIt(markdownItOptions).use(mdItAttrs).use(mdItBracketedSpans);

exports.markdownIt = markdownIt;
