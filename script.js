const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const targetId = tab.getAttribute("data-tab-target");
    const targetTab = document.querySelector(`[data-tab="${targetId}"]`);

    if (targetTab) {

      tabs.forEach(tab => {
        tab.classList.remove("active");
      });

      tab.classList.add("active");

      document.querySelectorAll(".tab_content").forEach(content => {
        content.style.display = "none";
      });

      targetTab.style.display = "block";
      targetTab.classList.add("custom-tab-content");
    }
  });
});
