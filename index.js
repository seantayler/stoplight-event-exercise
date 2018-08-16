

(function() {
  'use strict';

let stopBtn = document.getElementById('stopButton');
let slowBtn = document.getElementById('slowButton');
let goBtn = document.getElementById('goButton');

let stopLight = document.getElementById('stopLight');
let slowLight = document.getElementById('slowLight');
let goLight = document.getElementById('goLight');

stopBtn.addEventListener('click', () => stopLight.classList.toggle('stop'));
slowBtn.addEventListener('click',() => slowLight.classList.toggle('slow'));
goBtn.addEventListener('click',()=> goLight.classList.toggle('go'));


stopBtn.addEventListener('mouseenter', () => console.log("Entered stop button."));
stopBtn.addEventListener('mouseleave', () => console.log("Left stop button."));


slowBtn.addEventListener('mouseenter', () => console.log("Entered slow button."));
slowBtn.addEventListener('mouseleave', () => console.log("Left slow button."));


goBtn.addEventListener('mouseenter', () => console.log("Entered go button."));
goBtn.addEventListener('mouseleave', () => console.log("Left go button."));



  // YOUR CODE HERE
})();
