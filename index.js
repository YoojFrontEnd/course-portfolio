let openModalIn = document.getElementById('userControlModalOpenIn');
let closeModalIn = document.getElementById('userControlModalCloseIn');
let modalModalIn = document.getElementById('userControlModalIn');

openModalIn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(openModalIn)
  userControlModalIn.style.display = 'block'
  userControlModalIn.style.transition = "all 2s"
});

closeModalIn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(closeModalIn)
  userControlModalIn.style.display = 'none';
});


let openModalUp = document.getElementById('userControlModalOpenUp');
let closeModalUp = document.getElementById('userControlModalCloseUp');
let modalModalUp = document.getElementById('userControlModalUp');

openModalUp.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(openModalUp)
  userControlModalUp.style.display = 'block';
});

closeModalUp.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(closeModalUp)
  userControlModalUp.style.display = 'none';
});

//  Burger
let open = document.getElementById('open')
let close = document.getElementById('close')
let modal = document.getElementById('burger')

close.addEventListener('click', function (event) {
  event.preventDefault()
  modal.style.display = 'none'
})

open.addEventListener('click', function (event) {
  event.preventDefault()
  burger__modal.style.display = 'flex'
})
