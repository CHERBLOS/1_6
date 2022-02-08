const buttonChat = document.querySelectorAll(".button__chat");
const modal = document.querySelector(".modal");
const modalChat = modal.querySelector(".modal__chat");
const modalButton = modalChat.querySelector(".modal__button");
const tabListItems = document.querySelectorAll("[data-tab]");

const modalChatOpener = () => {
  modal.classList.add("modal--active");
  modalChat.classList.add("modal__chat--active");
  modalButton.focus();
  tabIndexAdd();
};

const modalChatClose = () => {
  modal.classList.remove("modal--active");
  modalChat.classList.remove("modal__chat--active");
  tabIndexRemove();
};

buttonChat.forEach((element) =>
  element.addEventListener("click", modalChatOpener)
);

const targetChecker = (e) => {
  if (e.target.hasAttribute("data-close")) {
    modalChatClose();
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
