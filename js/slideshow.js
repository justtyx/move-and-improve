//text-animation
window.addEventListener('load', slideText);

function slideText() { 
  document.querySelector('.text').classList.add('slide-in');
 }

// slideshow
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 800); // Change image every 0.8s
}