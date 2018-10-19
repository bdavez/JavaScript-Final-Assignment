// Author: Brendan Davis
// Email: davis.045@gmail.com
// Date: Oct.19 2018
// Course: CPNT-262
// Assignment: Final Project

var goForward = true;

function planeFly() {
  var img = document.getElementById('plane');
  var currentLeft = parseInt(img.style.left);

  if (goForward && (currentLeft > (window.innerWidth-img.width))) {
    goForward = false;
    img.style.transform = "scaleX(-1)";
  }

  if (!goForward && (currentLeft <= 0)) {
    goForward = true;
    img.style.transform = "scaleX(1)";
  }

  if (goForward) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}

setInterval(planeFly, 25)