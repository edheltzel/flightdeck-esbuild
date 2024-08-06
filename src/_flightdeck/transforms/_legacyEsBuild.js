// @ts-check

/**
 * ESBuild Transform function
 * @module _legacyEsBuild
 * @requires esbuild
 */

const isProd = process.env.ENV === "prod";
const esbuild = require("esbuild");

/**
 * @typedef {import('@11ty/eleventy').UserConfig} EleventyConfig
 */

/**
 * Adds the ESBuild transform to the Eleventy config.
 * @param {EleventyConfig} config - The Eleventy configuration object.
 */
const transformJs = (config) => {
  config.on("eleventy.after", async () => {
    await esbuild.build({
      entryPoints: { "assets/js/app": "./src/assets/js/app.js" },
      bundle: true,
      outdir: "dist",
      minify: isProd,
      sourcemap: !isProd,
      splitting: true,
      format: "esm",
      logLevel: "warning",
      metafile: true,
    });
  });
};

module.exports = { transformJs };
