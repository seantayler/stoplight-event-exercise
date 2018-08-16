

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



  // YOUR CODE HERE
})();
