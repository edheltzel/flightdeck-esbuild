// minify HTML
const htmlmin = require("html-minifier");

module.exports = (config) => {
	config.addTransform("htmlMin", async (content, outputPath) => {
		if (outputPath?.endsWith(".html")) {
			const minified = htmlmin.minify(content, {
				collapseWhitespace: true,
				minifyCSS: true,
				removeComments: true,
				useShortDoctype: true,
			});
			return minified;
		}
		return content;
	});
};
