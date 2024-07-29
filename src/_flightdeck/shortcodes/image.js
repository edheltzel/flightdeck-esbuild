/**
 * Generates an HTML picture tag with responsive attributes using the @11ty/eleventy-img library.
 * @param {Object} params - The parameters for the image
 * @param {string} params.src - The path to the image file.
 * @param {string} params.alt - The alternative text for the image.
 * @param {string} params.sizes - The responsive sizes attribute for the image.
 * @returns {Promise<string>} - The generated HTML for the image element.
 * @example {% image src="/assets/images/moon.jpg", alt="A picture of the moon", sizes="(max-width: 600px) 100vw, 50vw" %}
 */

// Import Image library
const Image = require("@11ty/eleventy-img");

// Shortcode function
module.exports = async (params) => {
  const {
    src,
    alt,
    sizes = "100vw"
  } = params;

  if (!src) {
    throw new Error("src is required for the image");
  }

  if (!alt) {
    throw new Error("alt is required for the image");
  }

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
    sizes,
    loading: "lazy",
    decoding: "async",
  });
};
