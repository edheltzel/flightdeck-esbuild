/**
 * This module exports a function that performs image processing tasks.
 * It uses the sharp library to optimize and generate different sizes of images.
 * The processed images are saved to a destination directory, and a cache is used to skip already processed images.
 *
 * @param {Object} config - The configuration object.
 * @returns {Promise<void>} - A promise that resolves when all image processing tasks are completed.
 * @summary Image processing module for Flightdeck
 * @usage Place images in the `src/assets/images` directory and they will be processed and copied to the `dist/assets/images` directory.
 * @todo's see list below:
 * Add support for SVGs and AVIFs
 * Use sharp's .toBuffer() and fs.writeFile() instead of .toFile() to avoid unnecessary filesystem operations.
 * Load/save the cache asynchronously instead of blocking startup and exit.
 * Increase sharp's concurrency setting to process more images in parallel.
 * Use a faster hash algorithm like FNV or CityHash if available.
 * Pre-generate common resized versions instead of per image.
 * Resize images in a single sharp call instead of calling sharp multiple times.
 * Use worker threads for parallel processing instead of awaiting promises.
 * Limit glob scanning to only image files.
 * Cache optimized originals so sizes come from that.
 * Use a job queue like Bull to smooth out image processing.
 * Split processing into tasks - optimize originals first, then sizes.
 * Use Redis or Memcached to cache images instead of filesystem.
 * Use AVIF instead of WebP for better compression.
 * Resize images with the "lanczos3" resampling algorithm.
 */

const sharp = require("sharp");
const fs = require("fs-extra");
const glob = require("glob-promise");
const path = require("path");
const crypto = require("crypto");
const ProgressBar = require("progress");
module.exports = (options = {}) => async (config) => {
  // Image folders
  const srcDir = options.srcDir || "src/assets/images";
  const destDir = options.destDir || "dist/assets/images";

  // Cache directory and file
  const cacheDir = ".cache";
  const cacheFile = `${cacheDir}/images.json`;

  // Flightdeck prefix
  const fd = "[FD]";

  // Silent skip option
  const silentSkip = options.silentSkip;
  const lessVerbose = options.lessVerbose;

  // Ensure destination and cache directories
  fs.ensureDirSync(destDir);
  fs.ensureDirSync(cacheDir);

  // Image sizes to generate
  const sizes = [800, 1200, 1600];

  // Load cache
  let cache = {};
  if (fs.existsSync(cacheFile)) {
    cache = JSON.parse(fs.readFileSync(cacheFile));
  }

  config.on("eleventy.after", async () => {
    // Get images recursively
    const files = await glob(`${srcDir}/**/*.{jpg,png,webp,jpeg}`);

    // Import chalk dynamically
    const chalk = await import("chalk");

    // Create a new progress bar
    const bar = new ProgressBar(`${fd} Images processed :bar> :current/:total`, { total: files.length });

    // Process each file
    const promises = files.map(async (file) => {
      // Output path replaces srcDir with destDir
      const outputPath = file.replace(srcDir, destDir);

      // Calculate hash of image
      const hash = crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex");

      // Check if image has already been optimized
      if (cache[hash]) {
        if (!silentSkip) {
          console.log(chalk.default.green(`${fd} Image ${file} has already been optimized. Skipping...`));
        }
        return; // Skip this image
      }

      try {
        // Optimize original image
        if (!lessVerbose) {
          console.log(chalk.default.blue(`${fd} Processing image ${file}...`));
        }
        await sharp(file).jpeg({ quality: 80 }).png({ quality: 80 }).webp({ quality: 80 }).toFile(outputPath);

        // Generate additional sizes
        for (const size of sizes) {
          const resizedOutputPath = outputPath.replace(/(\.\w+)$/, `-${size}$1`);
          await sharp(file)
            .resize(size)
            .jpeg({ quality: 80 })
            .png({ quality: 80 })
            .webp({ quality: 80 })
            .toFile(resizedOutputPath);
        }

        // Add image hash to cache
        cache[hash] = true;
        // Update the progress bar
        bar.tick();

        if (!lessVerbose) {
          console.log(chalk.default.green(`${fd} Finished processing image ${file}`));
        }
      } catch (err) {
        console.error(chalk.default.red(`${fd} Error processing image ${file}: ${err.message}`));
      }
    });

    // Wait for all promises to resolve
    await Promise.all(promises);

    if (!lessVerbose) {
      const chalk = await import("chalk");
      console.log(chalk.default.green(`${fd} Finished processing ${files.length} images`));
    }
    // Save cache
    fs.writeFileSync(cacheFile, JSON.stringify(cache));
  });
};
