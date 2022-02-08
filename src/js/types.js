const minimizerList = document.querySelector(".types__container");
const showMoreButton = minimizerList.nextElementSibling;
const typesItems = minimizerList.querySelectorAll(".types__list-btn");
let indexStart;

const showMoreItems = (event) => {
  minimizerList.classList.toggle("types__minimized");
  showMoreButton.classList.toggle("types__button--active");

  if (minimizerList.classList.contains("types__minimized")) {
    showMoreButton.textContent = "Показать все";
    tabIndexAdd(indexStart);
  } else {
    showMoreButton.textContent = "Скрыть";
    tabIndexRemove(indexStart);
  }
};

const tabIndexAdd = (index) => {
  for (index; index < typesItems.length; index++) {
    typesItems[index].setAttribute("tabindex", "-1");
  }
};

const tabIndexRemove = (index) => {
  for (index; index < typesItems.length; index++) {
    typesItems[index].setAttribute("tabindex", "0");
  }
};

const tabChecker = () => {
  if (
    window.screen.width < 1016 &&
    minimizerList.classList.contains("types__minimized")
  ) {
    indexStart = 3;
    tabIndexAdd(indexStart);
  } else if (
    window.screen.width > 1015 &&
    minimizerList.classList.contains("types__minimized")
  ) {
    indexStart = 4;
    tabIndexAdd(indexStart);
  }
};

showMoreButton.addEventListener("click", showMoreItems);

document.addEventListener("DOMContentLoaded", tabChecker);
