/**
 * Removes the file extension from a filename or path.
 *
 * @param {string} file - The file name or path
 * @returns {string} The file name without the extension
 * @usage <body class="layout--{{ layout | stripExt }}">
 * useful for creating css classes based on layouts
 */
const stripFileExtension = (file) => {
  return file.replace(/\.[^/.]+$/, "");
};

module.exports = { stripFileExtension };
