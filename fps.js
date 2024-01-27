alert("+------------------------------------------------------------+\n|                            fps.js v0.1                                   |\n|      A simple fps counter in pure js.                  |\n|      Bugs: Max displayed fps 30                         |\n|      Copyright (c) 2024 TrippleMSoftware       |\n+------------------------------------------------------------+");

  var style = document.createElement(
    'style');
  style.innerHTML =
    `@import url('https://fonts.googleapis.com/css2?family=Honk&display=swap');`;
  document.head.appendChild(style);
  var fps = 0;
  var startTime, endTime;

  function updateFPS() {
    endTime = performance.now();
    var timeDiff = endTime - startTime;
    fps = Math.round(1000 / timeDiff);
    startTime = endTime;
    requestAnimationFrame(updateFPS);
  }

  function startFPSCounter() {
    startTime = performance.now();
    updateFPS();
  }
  startFPSCounter();
  var fpsDiv = document.createElement(
    'div');
  fpsDiv.id = 'fpscounter'
  fpsDiv.style.position = 'fixed';
  fpsDiv.style.top = '25px';
  fpsDiv.style.left = '10px';
  fpsDiv.style.backgroundColor =
    'rgba(0, 0, 0, 0.5)';
  fpsDiv.style.borderRadius = '5px';
  fpsDiv.style.color = 'white';
  fpsDiv.style.padding = '10px';
  fpsDiv.style.fontFamily =
    'Honk, system-ui';
  fpsDiv.style.fontSize = '24px';
  fpsDiv.style.zIndex = '999';
  fpsDiv.style.webkitUserSelect = 'none';
  fpsDiv.style.userSelect = 'none';
  fpsDiv.style.width = '100px'
  document.body.appendChild(fpsDiv);

  function updateFPSDisplay() {
    fpsDiv.textContent = 'FPS: ' + fps;
    requestAnimationFrame(
      updateFPSDisplay);
  }
  updateFPSDisplay();

  var fpscounter = document
    .getElementById("fpscounter");

  var isDragging = false;
  var offsetX = 0;
  var offsetY = 0;

  fpscounter.style.cursor = 'grab';

  fpscounter.addEventListener("mousedown",
    function(event) {
      fpscounter.style.cursor = 'hold';
      isDragging = true;
      offsetX = event.clientX -
        fpscounter.offsetLeft;
      offsetY = event.clientY -
        fpscounter.offsetTop;
    });

  document.addEventListener("mousemove",
    function(event) {
      if (isDragging) {
        fpscounter.style.left = (event
          .clientX - offsetX) + "px";
        fpscounter.style.top = (event
          .clientY - offsetY) + "px";
      }
    });

  document.addEventListener("mouseup",
    function() {
      isDragging = false;
    });
