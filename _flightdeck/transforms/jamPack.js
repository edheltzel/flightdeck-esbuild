/**
 * Exports a function that runs AFTER eleventy
 * @param {Object} config - eleventy config object
 * @summary This executes the jampack optimization tool on the output after build.
 * @link https://jampack.divriots.com/cli-options/
 */
const manifest = require("../manifest");
module.exports = (config) => {
  config.on("eleventy.after", async () => {
    const { spawn } = require("child_process");
    const jamPack = spawn("jampack", [manifest.output, manifest.jampack.flags], { stdio: "inherit", shell: true });
    jamPack.on("error", (error) => {

      console.error(`jampack error: ${error}`);
    });
  });
};
