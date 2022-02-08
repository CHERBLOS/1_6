const navigationList = document.querySelector(".navigation__items");
const navigationItems = navigationList.querySelectorAll(".navigation__item");
let activeItem = navigationList.querySelector(".navigation__item--active");

const activationItem = (element) => {
  activeItem.classList.remove("navigation__item--active");
  element.path[1].classList.add("navigation__item--active");
  activeItem = element.path[1];
};

navigationItems.forEach((element) =>
  element.addEventListener("click", activationItem)
);
