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
    const bar = new ProgressBar(
      `${chalk.yellow(`${fd} Images processed :bar> :current/:total images in, :elapsed seconds`)}`,
      {
        total: files.length,
      },
    );

    const promises = files.map(async (file) => {
      const outputPath = file.replace(srcDir, destDir);
      const hash = crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex");

      if (cache[hash]) {
        if (!silentSkip) {
          console.log(chalk.green(`${fd} Image ${file} has already been optimized. Skipping...`));
        }
        return;
      }

      try {
        if (!lessVerbose) {
          console.log(chalk.blue(`${fd} Processing image ${file}...`));
        }

        const buffer = await sharp(file).jpeg({ quality: 80 }).png({ quality: 80 }).webp({ quality: 80 }).toBuffer();

        fs.writeFileSync(outputPath, buffer);

        for (const size of sizes) {
          const resizedOutputPath = outputPath.replace(/(\.\w+)$/, `-${size}$1`);
          const resizedBuffer = await sharp(file)
            .resize(size)
            .jpeg({ quality: 80 })
            .png({ quality: 80 })
            .webp({ quality: 80 })
            .toBuffer();

          fs.writeFileSync(resizedOutputPath, resizedBuffer);
        }

        cache[hash] = true;
        bar.tick();

        if (!lessVerbose) {
          console.log(chalk.green(`${fd} Finished processing image ${file}`));
        }
      } catch (err) {
        console.error(chalk.red(`${fd} Error processing image ${file}: ${err.message}`));
      }
    });

    await Promise.all(promises);

    if (!lessVerbose) {
      console.log(chalk.green(`${fd} Finished processing ${files.length} images`));
    }

    await fs.writeJson(cacheFile, cache);
  });
};
