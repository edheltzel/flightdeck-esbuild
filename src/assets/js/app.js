import Alpine from "alpinejs";
import toggleTheme from "./modules/toggle-theme";

window.Alpine = Alpine;
Alpine.data("theme", toggleTheme);
Alpine.start();
