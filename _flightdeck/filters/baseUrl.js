/**
 * Prefixes the given URL with the site's base URL.
 * @param {string} url - The URL to prefix
 * @returns {string} The URL prefixed with the base URL
 * @see _includes/data/site.js baseUrl
 * @usage
 * {% set url = "/about/" %}
 * {{ page.url | baseUrl }}
 * // outputs: https://example.com/about/
 */

const baseUrl = require("../../src/_includes/data/site").baseUrl;

module.exports = (url) => {
  return `${baseUrl}${url}`;
};
