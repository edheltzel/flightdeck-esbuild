/**
 * Sets the version of assets.
 * @example {% version %}
 */
const now = String(Date.now());
module.exports = (config) => {
  return now;
};
