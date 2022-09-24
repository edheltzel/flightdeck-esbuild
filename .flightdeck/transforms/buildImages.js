// compress and optimize images at build time
module.exports = (config) => {
  config.on("eleventy.after", () => {
    const spawn = require("child_process").spawn;
    const child = spawn("optimizt", ["src/assets/images", "--output dist/"], {
      stdio: "inherit",
      shell: true,
    });
  });
};
