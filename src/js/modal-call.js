const buttonCall = document.querySelectorAll(".button__call");
const modal = document.querySelector(".modal");
const modalCall = modal.querySelector(".modal__call");
const buttonClose = modal.querySelector(".modal__button");
const modalScreen = modal.querySelector(".overlay");

const modalCallOpener = function () {
  modal.classList.add("modal--active");
  modalCall.classList.add("modal__call--active");
};

const modalCallClose = function () {
  modal.classList.remove("modal--active");
  modalCall.classList.remove("modal__call--active");
};

buttonCall.forEach((element) =>
  element.addEventListener("click", modalCallOpener)
);

buttonClose.addEventListener("click", modalCallClose);

modalScreen.addEventListener("click", modalCallClose);
