(() => {
  // theme swap
  const html = document.documentElement;
  // Initialize theme
  const initTheme = (theme) => {
    if (theme === "dark") {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  };

  const theme = localStorage.getItem("theme");
  initTheme(theme);

  const eclipse = document.getElementById("mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      html.setAttribute("data-theme", "light");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      html.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  eclipse.addEventListener("click", () => {
    toggleTheme(localStorage.getItem("theme"));
  });
})();
