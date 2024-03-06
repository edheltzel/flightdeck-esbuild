/**
 * @file This is the main entry point for the application. It imports and initializes Alpine.js and VGSCursor.
 * @requires module:alpinejs
 */

import Alpine from "alpinejs";
import toggleTheme from "./modules/toggleTheme";

// Assigning Alpine to the global window object
window.Alpine = Alpine;

Alpine.data("theme", toggleTheme);
/**
 * Starts Alpine.js
 * @see {@link https://github.com/alpinejs/alpine#start|Alpine.start}
 */
Alpine.start();
