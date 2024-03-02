/**
 * @file images.js
 * @description This module provides an image optimization transform using @11ty/eleventy-img.
 * It exports a function that hooks into the Eleventy build process, specifically the 'eleventy.after' event.
 * When this event is triggered, the module optimizes ALL images in the specified base directory and then saves the optimized images in the specified output directory.
 * The image optimization process includes resizing the images to a width of 1600 pixels and applying various Sharp options.
 * This function is used in the _flightdeck/transforms.js module, is Optional and set inside of the eleventy.config.js file.
 * @requires @11ty/eleventy-img
 * @requires path
 * @requires fast-glob
 */
const Image = require("@11ty/eleventy-img");
const path = require("path");
const glob = require("fast-glob");

const optimizeImages = async () => {
  const baseDirectory = "./src/assets/images";
  const outputDirectory = "./dist/assets/images";

  // Get all image files
  const imageFiles = await glob(`${baseDirectory}/**/*.{png,jpg,jpeg,webp}`, {
    onlyFiles: true, // only get files not directories
  });

  // Optimize all images in parallel
  await Promise.all(
    imageFiles.map(async (imageFile) => {
      const relativePath = path.relative(baseDirectory, imageFile);
      const outputPath = path.join(outputDirectory, path.dirname(relativePath));
      const outputUrlPath = path.join("/assets/images", path.dirname(relativePath));

      await Image(imageFile, {
        formats: ["auto"],
        urlPath: outputUrlPath,
        widths: [1600],
        outputDir: outputPath,
        filenameFormat: (id, src, width, format, options) => {
          const name = path.basename(src, path.extname(src));
          return `${name}.${format}`;
        },
        sharpOptions: {
          quality: 80,
          compressionLevel: 9,
          progressive: true,
          optimizeScans: true,
          withMetadata: false,
        },
      });
    }),
  );
};

module.exports = {
  transformImages: (config) => {
    config.on("eleventy.after", async () => {
      await optimizeImages();
    });
  },
};
