"use strict";
let span = document.getElementsByClassName('close')[0];
let triggerVideo = document.getElementById('triggerModal');
let modal = document.getElementById('portModal');
let toggleButton = document.getElementById('toggleButton')

/*
function toggleMode() {
  let element = document.body;
  element.classList.toggle('light');
}
*/

function showVideoModal() {
  modal.style.display = "block";
}

function portSquarePop(portImg) { //function to display the modal
let modalSquare = document.getElementById('imgM'); //retrieving element for modal image
let caption = document.getElementById('caption'); //retrieving caption element

modal.style.display = 'block'; //displaying the modal
modalSquare.src = portImg.src; //inserting the image
caption.innerHTML  = portImg.alt; //inserting the caption
}

function closeModal() { //function to close the modal
  modal.style.display = 'none'; //hiding modal
}

let portSquares = document.getElementsByClassName('portSquare');

for (let i = 0; i < portSquares.length; i++) {
  portSquares[i].addEventListener('click',function() {
    portSquarePop(this);
  });
} //event listener on images

span.addEventListener('click',closeModal); //event listener on close button
triggerVideo.addEventListener('click', showVideoModal); //event listener on "this", to show video
modal.addEventListener('click', closeModal); //event listener to close the modal when the user clicks on it.
//toggleButton.addEventListener('click',toggleMode);