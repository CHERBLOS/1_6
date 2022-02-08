const buttonCall = document.querySelectorAll(".button__call");
const modal = document.querySelector(".modal");
const modalCall = modal.querySelector(".modal__call");
const modalButton = modalCall.querySelector(".modal__button");
const tabListItems = document.querySelectorAll("[data-tab]");

const modalCallOpener = () => {
  modal.classList.add("modal--active");
  modalCall.classList.add("modal__call--active");
  modalButton.focus();
  tabIndexAdd();
};

const modalCallClose = () => {
  modal.classList.remove("modal--active");
  modalCall.classList.remove("modal__call--active");
  tabIndexRemove();
};

buttonCall.forEach((element) =>
  element.addEventListener("click", modalCallOpener)
);

const targetChecker = (e) => {
  if (e.target.hasAttribute("data-close")) {
    modalCallClose();
  }
};

const tabIndexAdd = () => {
  tabListItems.forEach((element) => {
    element.setAttribute("tabindex", "-1");
  });
};

const tabIndexRemove = () => {
  tabListItems.forEach((element) => {
    element.setAttribute("tabindex", "0");
  });
};

modal.addEventListener("click", targetChecker);
