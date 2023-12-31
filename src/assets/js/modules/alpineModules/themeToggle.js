/**
 * @file This file is responsible for toggling the theme of the application. It uses Alpine.js for state management.
 * @requires module:alpinejs
 */

import Alpine from "alpinejs";

/**
 * Alpine store for theme switching. It holds the state of the theme (dark or light) and a method to toggle it.
 * @name themeSwitch
 * @property {boolean} dark - Represents whether the dark theme is active or not.
 * @property {function} toggle - Toggles the theme between dark and light.
 */
Alpine.store("themeSwitch", {
  dark: false,
  toggle() {
    const html = document.documentElement;
    this.dark = !this.dark;
    if (this.dark) {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("dark", JSON.stringify("dark"));
    } else {
      html.setAttribute("data-theme", "light");
      localStorage.setItem("dark", JSON.stringify("light"));
    }
  },
});

// Assigning Alpine to the global window object
window.Alpine = Alpine;

/**
 * Starts Alpine.js
 * @see {@link https://github.com/alpinejs/alpine#start|Alpine.start}
 */
Alpine.start();
