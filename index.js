let openModal = document.getElementById('userControlModalOpen');
let closeModal = document.getElementById('userControlModalClose');
let modalModal = document.getElementById('userControlModal');

openModal.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(openModal)
  modalModal.style.display = 'block';
  modalModal.style.transition = '0.3s all ease';

});

closeModal.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(closeModal)
  modalModal.style.display = 'none';
});
