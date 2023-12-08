import Alpine from "alpinejs";
import { VGSCursor } from "./modules/vgsCursor.js";

Alpine.store("themeSwitcher", {
  dark: false,
  toggle() {
    const html = document.documentElement;
    this.dark = !this.dark;
    if (this.dark) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  },
});
window.Alpine = Alpine;
Alpine.start();

VGSCursor();
