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
 * @todo might not benefit from this, but Increase sharp's concurrency setting to process more images in parallel.
 * Use a faster hash algorithm like FNV or CityHash if available.
 * Pre-generate common resized versions instead of per image.
 * Resize images in a single sharp call instead of calling sharp multiple times.
 * Use worker threads for parallel processing instead of awaiting promises.
 * Cache optimized originals so sizes come from that.
 * Use a job queue like Bull to smooth out image processing.
 * Split processing into tasks - optimize originals first, then sizes.
 * Use Redis or Memcached to cache images instead of filesystem.
 */

const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");
const glob = require("fast-glob");
const crypto = require("crypto");
const ProgressBar = require("progress");

module.exports = (options = {}) => async (config) => {
  const srcDir = options.srcDir || "src/assets/images";
  const destDir = options.destDir || "dist/assets/images";
  const cacheDir = ".cache";
  const cacheFile = `${cacheDir}/images.json`;
  const fd = "[FD]";
  const silentSkip = options.silentSkip;
  const lessVerbose = options.lessVerbose;
  const sizes = [800, 1200, 1600];

  fs.ensureDirSync(destDir);
  fs.ensureDirSync(cacheDir);

  let cache;
  try {
    cache = await fs.readJson(cacheFile);
  } catch (err) {
    if (err.code === "ENOENT") {
      cache = {};
    } else {
      throw err;
    }
  }

  config.on("eleventy.after", async () => {
    const files = await glob([`${srcDir}/**/*.{jpg,png,webp,jpeg}`]);

    const { default: chalk } = await import("chalk");

    // Create a new progress bar for optimizing originals
    const barOptimize = new ProgressBar(
      `${chalk.yellow(`${fd} Optimizing original images :bar> :current/:total images in, :elapsed seconds`)}`,
      { total: files.length },
    );

    // Create a new progress bar for processing sizes
    const barSizes = new ProgressBar(
      `${chalk.yellowBright(
        `${fd} Processing sizes of original images :bar> :current/:total images in, :elapsed seconds`,
      )}`,
      { total: files.length },
    );

    // Task 1: Optimize original images
    const optimizeOriginals = files.map(async (file, index) => {
      const outputPath = file.replace(srcDir, destDir);

      const hash = crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex");

      if (cache[hash]) {
        if (!silentSkip) {
          console.log(chalk.green(`${fd} Image ${file} has already been optimized. Skipping...`));
        }
        barOptimize.tick();
        return;
      }

      try {
        if (!lessVerbose) {
          console.log(chalk.blue(`${fd} Processing image ${file}...`));
        }

        const buffer = await sharp(file).jpeg({ quality: 80 }).png({ quality: 80 }).webp({ quality: 80 }).toBuffer();

        fs.writeFileSync(outputPath, buffer);
        cache[hash] = true;
        barOptimize.tick();
      } catch (err) {
        console.error(`Error processing image ${file}: ${err}`);
      }
    });

    await Promise.all(optimizeOriginals);

    // Task 2: Process sizes
    const processSizes = files.map(async (file) => {
      const outputPath = file.replace(srcDir, destDir);

      for (const size of sizes) {
        const resizedOutputPath = outputPath.replace(/(\.\w+)$/, `-${size}$1`);

        // Check if resized image already exists
        if (fs.existsSync(resizedOutputPath)) {
          if (!silentSkip) {
            console.log(chalk.green(`${fd} Resized image ${resizedOutputPath} already exists. Skipping...`));
          }
          continue; // Skip this resized image
        }

        try {
          const resizedBuffer = await sharp(file)
            .resize(size)
            .jpeg({ quality: 80 })
            .png({ quality: 80 })
            .webp({ quality: 80 })
            .toBuffer();

          fs.writeFileSync(resizedOutputPath, resizedBuffer);
          if (!lessVerbose) {
            console.log(chalk.green(`${fd} Created resized image ${resizedOutputPath}`));
          }
        } catch (err) {
          console.error(chalk.red(`${fd} Error processing resized image ${resizedOutputPath}: ${err.message}`));
        }
      }
      // Update the progress bar for sizes
      barSizes.tick();
    });

    await Promise.all(processSizes);

    await Promise.all(processSizes);

    if (!lessVerbose) {
      console.log(chalk.green(`${fd} Finished processing ${files.length} images`));
    }

    await fs.writeJson(cacheFile, cache);
  });
};
