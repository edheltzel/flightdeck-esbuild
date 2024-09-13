/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,njk,md,liquid,webc,svg,path}"],
	darkMode: "class",
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				museo: ["MuseoModerno", "sans-serif"],
			},
			colors: {
				primary: "var(--color-primary)",
				alpha: "var(--color-alpha)",
				peach: "var(--color-peach)",
				charcoal: "var(--color-charcoal)",
				text: "var(--color-text)",
			},
		},
	},
	plugins: [],
};
