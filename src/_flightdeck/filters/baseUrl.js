const site = require("../../_includes/data/site");

/**
 * Prefixes the given URL with the site's base URL.
 * @param {string} url
 * @example {{ page.url | domain }}
 */

module.exports = (url) => {
  return new URL(url, site.baseUrl).href;
};
