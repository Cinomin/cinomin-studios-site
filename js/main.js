// main.js
// Contains Javascript functions.....

// Easter egg
var rawr = function() {
  document.getElementsByClassName('container')[0].style.paddingTop = 0;
  document.getElementsByClassName('banner')[0].style.display = "none";
  document.getElementsByClassName('soon')[0].innerHTML = "<img height='200px' src='images/rawrburt.png'>";
}
