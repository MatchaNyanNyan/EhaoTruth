const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const targetId = tab.getAttribute("data-tab-target");
    const targetTab = document.querySelector(`[data-tab="${targetId}"]`);

    if (targetTab) {
      // Remove .active class from all tabs
      tabs.forEach(tab => {
        tab.classList.remove("active");
      });

      // Add .active class to the clicked tab
      tab.classList.add("active");

      // Hide all tab_content elements
      document.querySelectorAll(".tab_content").forEach(content => {
        content.style.display = "none";
      });

      // Display the target tab content
      targetTab.style.display = "block";
      targetTab.classList.add("custom-tab-content");
    }
  });
});
