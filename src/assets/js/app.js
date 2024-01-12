/**
 * @file This is the main entry point for the application. It imports and initializes Alpine.js and VGSCursor.
 * @requires module:alpinejs
 * @requires module:./modules/visualGuidanceSystem/vgs-cursor.js
 */

import Alpine from "alpinejs";
import { VGSCursor } from "./modules/visualGuidanceSystem/vgs-cursor.js";

// Assigning Alpine to the global window object
window.Alpine = Alpine;

/**
 * Starts Alpine.js
 * @see {@link https://github.com/alpinejs/alpine#start|Alpine.start}
 */
Alpine.start();

/**
 * Invokes VGSCursor function
 * @see {@link ./modules/visualGuidanceSystem/vgsCursor.js|VGSCursor}
 */
VGSCursor();
