var slideIndex = 1;
var slideCount;

showSlides(slideIndex);

function plusSlides(n) {
  slideIndex = slideIndex + n;
  if (slideIndex > slideCount) { 
    slideIndex = 1;
  } else if (slideIndex < 1) { 
    slideIndex = slideCount;
  }
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  
  if (n > slideCount) {slideIndex = 1}
  if (n < 1) {slideIndex = slideCount}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

slideCount = document.getElementsByClassName("slide").length;

var firstClone = document.getElementsByClassName("slide")[0].cloneNode(true);
var lastClone = document.getElementsByClassName("slide")[slideCount - 1].cloneNode(true);

document.getElementsByClassName("slides")[0].insertBefore(lastClone, document.getElementsByClassName("slides")[0].childNodes[0]);
document.getElementsByClassName("slides")[0].appendChild(firstClone);

slideCount = document.getElementsByClassName("slide").length;
