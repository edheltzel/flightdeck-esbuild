/**
 * Returns the first 200 characters as the excerpt
 * @usage {{ post.templateContent | excerpt | safe }}
 */

module.exports = (content) => {
  // Remove HTML tags
  const text = content.replace(/<[^>]+>/g, "");

  // Get first 200 characters
  let excerpt = text.substring(0, 200);

  // If excerpt ends mid-word, cut it off at the last space
  const lastSpace = excerpt.lastIndexOf(" ");
  if (lastSpace !== -1) {
    excerpt = excerpt.substring(0, lastSpace);
  }

  return `${excerpt}...`;
};
