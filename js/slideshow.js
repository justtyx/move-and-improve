//text-animation
window.addEventListener('load', slideText);

function slideText() { 
  document.querySelector('.text').classList.add('slide-in');
 }

// slideshow
// tutorial from https://www.w3schools.com/w3css/w3css_slideshow.asp
let slideIndex = 0;
carousel();

function carousel() {
  let imageRow;
  const image = document.querySelectorAll(".slides");
  for (imageRow = 0; imageRow < image.length; imageRow++) {
    image[imageRow].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > image.length) {slideIndex = 1}
  image[slideIndex-1].style.display = "block";
  setTimeout(carousel, 800); // Change image every 0.8s
}