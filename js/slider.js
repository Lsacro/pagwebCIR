function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
	dots[i].classList.remove("dotActive");
	dots[i].classList.add("dotNotActive");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.remove("dotNotActive");
  dots[slideIndex-1].classList.add("dotActive");
  nextSlide("next");
}

function nextSlide(s){
	if (s=='next'){
		timeSlide=setTimeout(showSlides, 20000); // Change image every 2 seconds
	}else{
		clearTimeout(timeSlide);
		showSlides();
	}
}

function currentSlide(n) {
  slideIndex = n;
  nextSlide('jump');
}

function plusSlides(n) {
	
	if (n<0){
		slideIndex -= 1;
		slideIndex += n;
	}
	
	if ((slideIndex+n)>slides.length){
		slideIndex = 0;
	}else if ((slideIndex)<0){
		slideIndex = slides.length-1;
	}
	nextSlide('jump');
  
}

function loadCaptionText(){
	
	captionTxt[0].innerHTML="Ovejas en el páramo del Chimborazo";
	captionTxt[1].innerHTML="El volcán Cotopaxi";
	captionTxt[2].innerHTML="El nevado Chimborazo";
	captionTxt[3].innerHTML="Amanecer en los Andes";
	captionTxt[4].innerHTML="Una vicuña en el páramo";
	captionTxt[5].innerHTML="El colibrí";
		
}

let slides = document.getElementsByClassName("mySlides");
let dotsGroup = document.getElementById('slidePosition');
let dots = dotsGroup.getElementsByTagName('span');
let captionTxt = document.getElementsByClassName("textSlideCaption");

let slideIndex = 0;
let timeSlide = 0;

loadCaptionText();

