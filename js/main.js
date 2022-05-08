let openModal = document.getElementById('userControlModalOpen');
let closeModal = document.getElementById('userControlModalClose');
let modalModal = document.getElementById('userControlModal');

open.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(openModal)
  modal.style.display = 'block';
});

close.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(closeModal)
  modal.style.display = 'none';
});
