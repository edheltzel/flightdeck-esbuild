/**
 * Get the current year - copyright
 * @usage {% year %}
 */
module.exports = (copyright) => {
  return `&copy; ${new Date().getFullYear()}`;
};
