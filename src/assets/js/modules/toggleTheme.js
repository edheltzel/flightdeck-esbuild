// Toggle theme module

export default function toggleTheme() {
  return {
    darkMode: localStorage.getItem("darkMode") === "true",
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("darkMode", this.darkMode);
    },
  };
}
