const iconopen = document.querySelector(".mobile-menu-icon");
const iconclose = document.querySelector(".mobile-menu-icon-close");
const mobileMenuSection = document.querySelector(".mobile-menu");

iconopen.addEventListener("click", () => {
  mobileMenuSection.style.display = "block";
  iconopen.style.display = "none";
  iconclose.style.display = "flex";
});
iconclose.addEventListener("click", () => {
  mobileMenuSection.style.display = "none";
  iconopen.style.display = "flex";
  iconclose.style.display = "none";
});
