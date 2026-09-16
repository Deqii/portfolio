export const themeInitScript = `
(function() {
  console.log("[theme-script] executing, timestamp:", Date.now());
  try {
    var stored = localStorage.getItem("theme");
    console.log("[theme-script] stored value:", stored);
    var theme = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    console.log("[theme-script] resolved theme:", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("[theme-script] class added, html classList now:", document.documentElement.className);
    }
  } catch (e) {
    console.log("[theme-script] error:", e);
  }
})();
`;
