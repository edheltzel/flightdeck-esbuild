import Alpine from "alpinejs";
import toggleTheme from "./components/toggle-theme";

window.Alpine = Alpine;
Alpine.data("theme", toggleTheme);
Alpine.start();
