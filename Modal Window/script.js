'use strict';
const modalWindow = document.querySelector('.modal');
const buttons = document.querySelectorAll('.show-modal');
const closeButton  = document.querySelector('.close-modal');
const bgBlur = document.querySelector('.overlay');

function closingModal(){
  modalWindow.classList.add('hidden');
  bgBlur.classList.add('hidden');
}
function openingModal(){
  modalWindow.classList.remove('hidden');
  bgBlur.classList.remove('hidden');
}

for(let i = 0; i< buttons.length; i++){
  buttons[i].addEventListener('click', openingModal)
}

closeButton.addEventListener('click', closingModal)

bgBlur.addEventListener('click', closingModal
  
)

addEventListener('Escape', function(){
  modalWindow.classList.add('hidden');
  bgBlur.classList.add('hidden');
})


function escClose(e){
  if(e.key == 'Escape'&& !modalWindow.classList.contains('hidden') == true){
    closingModal();

  }
}

document.addEventListener('keydown', escClose)
