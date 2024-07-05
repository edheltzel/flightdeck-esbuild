/**
 * Configures LightningCSS for FlightDeck:
 * - Registers "css" as a template format.
 * - Adds a "css" extension with custom compilation:
 *   - Excludes files starting with "_".
 *   - Bundles CSS using LightningCSS with minification, sourcemaps, and drafts enabled.
 *   - Resolves and tracks CSS @import dependencies.
 *   - Returns compiled CSS code.
 * @ref grease
 * @ref https://11ty.rocks/posts/process-css-with-lightningcss/
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
      const baseDir = path.basename(path.dirname(inputPath));
      if (baseDir.startsWith("_")) {
        return undefined;
      }

      // Store imported file paths
      const files = [];

      // Enable draft syntaxes for LightningCSS
      const targets = { future: 1 };

      // Bundle the CSS using LightningCSS
      const result = await css.bundleAsync({
        filename: inputPath,
        minify: true,
        sourceMap: true,
        drafts: {
          customMedia: true,
          nesting: true,
        },
        resolver: {
          resolve(specifier, from) {
            const importPath = path.resolve(path.dirname(from), specifier);
            files.push(importPath);
            return importPath;
          },
        },
        targets,
      });

      // Add imported files as dependencies
      this.addDependencies(inputPath, files);

      // Return the compiled CSS code
      return () => result.code.toString();
    },
  });
};
