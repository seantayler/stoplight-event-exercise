(function() {
  'use strict';

  let stopBtn = document.getElementById('stopButton');
  let slowBtn = document.getElementById('slowButton');
  let goBtn = document.getElementById('goButton');

  let stopLight = document.getElementById('stopLight');
  let slowLight = document.getElementById('slowLight');
  let goLight = document.getElementById('goLight');
  //
  // stopBtn.addEventListener('click', () => stopLight.classList.toggle('stop'));
  // slowBtn.addEventListener('click', () => slowLight.classList.toggle('slow'));
  // goBtn.addEventListener('click', () => goLight.classList.toggle('go'));


  stopBtn.addEventListener('mouseenter', () => console.log("Entered stop button."));
  stopBtn.addEventListener('mouseleave', () => console.log("Left stop button."));
  slowBtn.addEventListener('mouseenter', () => console.log("Entered slow button."));
  slowBtn.addEventListener('mouseleave', () => console.log("Left slow button."));
  goBtn.addEventListener('mouseenter', () => console.log("Entered go button."));
  goBtn.addEventListener('mouseleave', () => console.log("Left go button."));


  console.log('before', stopLight)
  stopBtn.addEventListener('click', () => {
    slowLight.classList.remove('slow');
    goLight.classList.remove('go');
    if (!stopLight.classList.contains('stop')) {
      stopLight.classList.add('stop');
      console.log('add', stopLight);
    } else {
      stopLight.classList.remove('stop');
      console.log('remove', stopLight);
    };
  })

  slowBtn.addEventListener('click', () => {
    stopLight.classList.remove('stop');
    goLight.classList.remove('go');

    if (!slowLight.classList.contains('slow')) {
      slowLight.classList.add('slow');
      console.log('slow bulb on');
    } else {
      slowLight.classList.remove('slow');
      console.log('slow bulb off');
    };
  })

  goBtn.addEventListener('click', () => {
    slowLight.classList.remove('slow');
    stopLight.classList.remove('stop');

    if (!goLight.classList.contains('go')) {
      goLight.classList.add('go');
      console.log('go bulb on');
    } else {
      goLight.classList.remove('go');
      console.log('go bulb off');
    };
  })




  // YOUR CODE HERE
})();
