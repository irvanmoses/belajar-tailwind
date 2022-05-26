const btn = document.querySelector("#nav-toggle");
const menu = document.querySelector("#mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// hide navbar menu on click outside of it
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.add("hidden");
  }
});

menu.addEventListener("click", (e) => {
  e.stopPropagation();
});

const userMenuBtn = document.querySelector("#user-menu-button");
const userMenu = document.querySelector("#user-menu");

userMenuBtn.addEventListener("click", () => {
  userMenu.classList.toggle("hidden");
});

// close user menu when click outside of it
document.addEventListener("click", (e) => {
  if (
    !userMenu.contains(e.target) &&
    !userMenuBtn.contains(e.target) &&
    !e.target.classList.contains("user-menu-button")
  ) {
    userMenu.classList.add("hidden");
  }
});
