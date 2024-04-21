/**
* app.js
* @file app.js
* @description Main JavaScript file Flightdeck using Alpine.js
* @reference https://alpinejs.dev/
*
 */

import Alpine from "alpinejs";
import toggleTheme from "./components/toggle-theme";

window.Alpine = Alpine;
Alpine.data("theme", toggleTheme);
Alpine.start();
