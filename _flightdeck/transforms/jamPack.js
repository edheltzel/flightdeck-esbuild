// postbuild processing of images, html, css, and js files
module.exports = (config) => {
  config.on("eleventy.after", () => {
    const spawn = require("child_process").spawn;

    const Images = spawn("jampack ./dist --cleancache", {
      stdio: "inherit",
      shell: true,
    });
  });
};
