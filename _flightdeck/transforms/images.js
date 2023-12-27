const Image = require("@11ty/eleventy-img");
const path = require("path");
const glob = require("fast-glob");

async function optimizeImages() {
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
}

module.exports = (config) => {
  config.on("eleventy.after", async () => {
    await optimizeImages();
  });
};
