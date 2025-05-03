// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Eye icon click - open GitHub repo
  document.querySelectorAll(".eye-icon").forEach(icon => {
    icon.addEventListener("click", () => {
      const repoUrl = icon.dataset.repo;
      window.open(repoUrl, "_blank");
    });
  });

  // Dark mode toggle (if you want a button for it)
  const toggleBtn = document.getElementById("dark-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }

  // Reveal on scroll
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // initial
});
