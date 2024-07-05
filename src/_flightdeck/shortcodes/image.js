/**
 * Generates an HTML picture tag with responsive attributes using the @11ty/eleventy-img library.
 * @param {string} src - The path to the image file.
 * @param {string} alt - The alternative text for the image.
 * @param {string} sizes - The responsive sizes attribute for the image.
 * @returns {Promise<string>} - The generated HTML for the image element.
 * @usage {% image "image path", "atl-text" %}
 * @example {% image "/assets/images/moon.jpg", "A picture of the moon" %}
 */

// Import Image library
const Image = require("@11ty/eleventy-img");

// Shortcode function
module.exports = async (src, alt, sizes) => {
  // Image paths
  const rootPath = `./src${src}`;
  const outputDir = "./dist/assets/images/";
  const urlPath = "/assets/images/";

  // Generate metadata
  const metadata = await Image(rootPath, {
    widths: [400, 800, 1600],
    formats: ["webp", "jpeg", "png"],
    outputDir: outputDir,
    urlPath: urlPath,
    svgShortCircuit: "size",
  });

  // Generate HTML
  return Image.generateHTML(metadata, {
    alt,
    sizes: sizes || "100vw",
    loading: "lazy",
    decoding: "async",
  });
};
