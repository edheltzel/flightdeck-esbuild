// @ts-check
/**
 * Configures LightningCSS for FlightDeck.
 *
 * This module sets up LightningCSS integration with the FlightDeck build process:
 * - Registers "css" as a template format.
 * - Adds a "css" extension with custom compilation logic.
 *
 * The custom compilation process:
 * - Excludes files in directories starting with "_".
 * - Bundles CSS using LightningCSS with the following features:
 *   - Minification
 *   - Source map generation
 *   - Draft CSS features enabled (custom media queries and nesting)
 *   - Resolves and tracks CSS import dependencies
 *   - Returns compiled CSS code as a string
 * @module lightningCssConfig
 * @requires lightningcss
 * @requires node:path
 * @see {@link https://github.com/11ty/eleventy-plugin-bundle|eleventy-plugin-bundle} - FlightDeck's bundling plugin
 * @see {@link https://lightningcss.dev/ | LightningCSS documentation}
 * @see {@link https://11ty.rocks/posts/process-css-with-lightningcss/ | Tutorial on using LightningCSS with Eleventy}
 *
 * @param {Object} config - The Eleventy configuration object
 */


const css = require("lightningcss");
const path = require("node:path");

module.exports = (config) => {
  // Add "css" as a template format
  config.addTemplateFormats("css");

  // Add a custom extension for CSS files
  config.addExtension("css", {
    outputFileExtension: "css",
    async compile(inputContent, inputPath) {
      // Exclude files in directories starting with "_"
      if (inputPath.split(path.sep).some(component => component.startsWith('_'))) {
        return undefined;
      }

      // Store imported file paths
      const files = new Set();

      // Enable draft syntaxes for LightningCSS
      const targets = { future: 1 };

      // Bundle the CSS using LightningCSS
      const result = await css.bundleAsync({
        filename: inputPath,
        minify: true,
        sourceMap: true,
        projectRoot: "../../assets/styles",
        drafts: {
          customMedia: true,
          nesting: true,
        },
        resolver: {
          resolve(specifier, from) {
            const importPath = path.resolve(path.dirname(from), specifier);
            files.add(importPath);
            return importPath;
          },
        },
        targets,
      });

      // Add imported files as dependencies
      this.addDependencies(inputPath, Array.from(files));

      // Return the compiled CSS code
      return () => result.code.toString();
    },
  });
};
