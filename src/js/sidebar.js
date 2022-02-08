const sidebarActivate = document.querySelector(".sidebar");
const burgerButtonClose = sidebarActivate.querySelector(".sidebar__menu");
const overlayClose = sidebarActivate.querySelector(".overlay");
const burgerButtonOpen = document.querySelector(".header__menu-button");
const sidebarNavItems = sidebarActivate.querySelectorAll(
  ".sidebar__navigation-item"
);
let sidebarNavActive = sidebarActivate.querySelector(
  ".sidebar__navigation-item--active"
);

burgerButtonOpen.addEventListener("click", function sidebarOpener() {
  sidebarActivate.classList.add("sidebar--active");
});

const sidebarClose = function () {
  sidebarActivate.classList.remove("sidebar--active");
};

const sidebarNavController = function (element) {
  sidebarNavActive.classList.remove("sidebar__navigation-item--active");
  element.path[1].classList.add("sidebar__navigation-item--active");
  sidebarNavActive = element.path[1];
};

burgerButtonClose.addEventListener("click", sidebarClose);

overlayClose.addEventListener("click", sidebarClose);

sidebarNavItems.forEach((element) =>
  element.addEventListener("click", sidebarNavController)
);
