// @ts-check

/**
 * Toggle theme module
 * @returns {Object} Theme object
 */
export default function toggleTheme() {
  return {
    /** @type {boolean} */
    darkMode: localStorage.getItem("darkMode") === "true",

    /**
     * Toggle dark mode
     */
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("darkMode", String(this.darkMode));
    },
  };
}
