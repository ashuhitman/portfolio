// Select all <a> elements with class .link
const links = document.querySelectorAll("a.link");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Remove 'active' class from all links
    links.forEach((l) => l.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");

    // Scroll to the target section
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// element entry animation
const obaserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElm = document.querySelectorAll(".hidden");
const hiddenFadeElm = document.querySelectorAll(".hiddenFadeIn");
const hiddenSlide = document.querySelectorAll(".hiddenSlide");
const hiddenSlideLeftElm = document.querySelectorAll(".hiddenSlideLeft");
const hiddenSlideRightElm = document.querySelectorAll(".hiddenSlideRight");
// add oberver
[
  hiddenElm,
  hiddenFadeElm,
  hiddenSlideLeftElm,
  hiddenSlideRightElm,
  hiddenSlide,
].forEach((elm) => {
  elm.forEach((el) => obaserver.observe(el));
});

// toggle theme
document.getElementById("theme-toggle").addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);

  // Update icon based on theme
  const themeIcon = document.getElementById("theme-icon");
  if (newTheme !== "dark") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});
