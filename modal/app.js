const btnOpenModal = document.querySelector(".open-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modalOverlay = document.querySelector(".modal-overlay");

btnOpenModal.addEventListener("click", function () {
  modalOverlay.classList.add("show-modal");
});

btnCloseModal.addEventListener("click", function () {
  modalOverlay.classList.remove("show-modal");
});
