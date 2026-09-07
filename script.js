document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");

      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      panels.forEach((panel) => {
        if (panel.id === targetId) {
          panel.classList.add("active");
          panel.hidden = false;
        } else {
          panel.classList.remove("active");
          panel.hidden = true;
        }
      });
    });
  });
});