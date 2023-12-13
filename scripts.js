"use strict";
let span = document.getElementsByClassName("close")[0];

function portSquarePop(portImg) { //function to display the modal
let modal = document.getElementById('portModal'); //retrieving modal
let modalSquare = document.getElementById('imgM'); //retrieving element for modal image
let caption = document.getElementById('caption'); //retrieving caption element

modal.style.display = 'block'; //displaying the modal
modalSquare.src = portImg.src; //inserting the image
caption.innerHTML  = portImg.alt //inserting the caption
}

function closeModal() { //function to close the modal
  let modal = document.getElementById('portModal'); //retrieving modal
  modal.style.display = 'none'; //hiding modal
}

let portSquares = document.getElementsByClassName('portSquare');

for (let i = 0; i < portSquares.length; i++) {
  portSquares[i].addEventListener('click',function() {
    portSquarePop(this);
  });
} //event listener on images

span.addEventListener('click',closeModal); //event listener on close button

