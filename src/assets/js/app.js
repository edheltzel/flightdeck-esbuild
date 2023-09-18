(() => {
  // theme swap
  const body = document.body;
  const eclipse = document.getElementById("mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  eclipse.addEventListener("click", () => {
    toggleTheme(localStorage.getItem("theme"));
  });
})();
