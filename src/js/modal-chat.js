const buttonChat = document.querySelectorAll(".button__chat");
const modal = document.querySelector(".modal");
const modalChat = modal.querySelector(".modal__chat");
const buttonClose = modalChat.querySelector(".modal__button");
const modalScreen = modal.querySelector(".overlay");

const modalChatOpener = function () {
  modal.classList.add("modal--active");
  modalChat.classList.add("modal__chat--active");
};

const modalChatClose = function () {
  modal.classList.remove("modal--active");
  modalChat.classList.remove("modal__chat--active");
};

buttonChat.forEach((element) =>
  element.addEventListener("click", modalChatOpener)
);

buttonClose.addEventListener("click", modalChatClose);

modalScreen.addEventListener("click", modalChatClose);
