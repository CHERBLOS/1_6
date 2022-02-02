let sidebarActivate = document.querySelector(".sidebar");
let burgerButtonClose = sidebarActivate.querySelector(".sidebar__menu");
let overlayClose = sidebarActivate.querySelector(".overlay");
let burgerButtonOpen = document.querySelector(".header__menu-button");

burgerButtonOpen.addEventListener("click", function sidebarOpener() {
  sidebarActivate.classList.add("sidebar--active");
});

const sidebarClose = function () {
  sidebarActivate.classList.remove("sidebar--active");
};

burgerButtonClose.addEventListener("click", sidebarClose);

overlayClose.addEventListener("click", sidebarClose);
