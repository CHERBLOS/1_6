const minimizerList = document.querySelector(".types__container");
const buttonMore = minimizerList.nextElementSibling;

buttonMore.addEventListener("click", function btnMore() {
  minimizerList.classList.toggle("types__minimized");
  buttonMore.classList.toggle("types__button--active");

  if (minimizerList.classList.contains("types__minimized")) {
    buttonMore.textContent = "Показать все";
  } else {
    buttonMore.textContent = "Скрыть";
  }
});
