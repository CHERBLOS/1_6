const minimizerList = document.querySelector(".brands__container");
const showMoreButton = minimizerList.nextElementSibling;
const brandsItems = minimizerList.querySelectorAll(".brands__list-btn");
let indexStart;

const showMoreItems = (event) => {
  minimizerList.classList.toggle("brands__minimized");
  showMoreButton.classList.toggle("brands__button--active");

  if (minimizerList.classList.contains("brands__minimized")) {
    showMoreButton.textContent = "Показать все";
    tabIndexAdd(indexStart);
  } else {
    showMoreButton.textContent = "Скрыть";
    tabIndexRemove(indexStart);
  }
};

showMoreButton.addEventListener("click", showMoreItems);

const tabIndexAdd = (index) => {
  for (index; index < brandsItems.length; index++) {
    brandsItems[index].setAttribute("tabindex", "-1");
  }
};

const tabIndexRemove = (index) => {
  for (index; index < brandsItems.length; index++) {
    brandsItems[index].setAttribute("tabindex", "0");
  }
};

const tabChecker = () => {
  if (
    window.screen.width < 1016 &&
    minimizerList.classList.contains("brands__minimized")
  ) {
    indexStart = 6;
    tabIndexAdd(indexStart);
  } else if (
    window.screen.width > 1015 &&
    minimizerList.classList.contains("brands__minimized")
  ) {
    indexStart = 8;
    tabIndexAdd(indexStart);
  }
};

document.addEventListener("DOMContentLoaded", tabChecker);
