let openModal = document.getElementById('userControlModalOpen');
let closeModal = document.getElementById('userControlModalClose');
let modalModal = document.getElementById('userControlModal');

openModal.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(openModal)
  modal.style.display = 'block';
});

closeModal.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(closeModal)
  modal.style.display = 'none';
});
