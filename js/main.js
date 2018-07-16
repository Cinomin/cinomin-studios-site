// main.js
// Contains Javascript functions.....

"use strict";

(function() {
  var soon = document.getElementsByClassName('soon')[0];

  // Easter egg
  document.getElementById("rawr").onclick = function() {
      soon.innerHTML = "";
      document.getElementsByClassName('banner')[0].style.display = "none";
      document.getElementsByClassName('container')[0].style.paddingTop = 0;
      var rawrburt = document.createElement("img")
      rawrburt.src = "images/rawrburt.png";
      soon.appendChild(rawrburt);
  }
})();
