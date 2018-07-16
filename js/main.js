// main.js
// Contains Javascript functions.....

"use strict";

(function() {

  // Easter egg
  document.getElementById("rawr").onclick = function() {
      var container = document.getElementsByClassName('container')[0];
      document.getElementById('soon').hidden = true;
      document.getElementById('banner').hidden = true;
      document.getElementById('burt').hidden = false;
      container.style.paddingTop = 0;
      container.style.width = "100%";
  }
})();
