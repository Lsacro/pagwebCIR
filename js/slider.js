function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
	dots[i].classList.remove("sliderDotActive");
	dots[i].classList.add("sliderDotNotActive");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].classList.remove("sliderDotNotActive");
  dots[slideIndex-1].classList.add("sliderDotActive");
  nextSlide("next");
}

function nextSlide(s){
	if (s=='next'){
		timeSlide=setTimeout(showSlides, waitSlide); // Change image every 2 seconds
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

function loadNumberText(){
	for (i=0;i<numberTxt.length;i++){
		numberTxt[i].innerHTML=(i+1)+"/"+(numberTxt.length);
	}
}

let sliderGroup = document.getElementById('slider01');
let slides = sliderGroup.getElementsByClassName("slideMySlides");
let dotsGroup = document.getElementById('sliderDots01');
let dots = dotsGroup.getElementsByTagName('span');
let captionTxt = document.getElementsByClassName("slideTextCaption");
let numberTxt = document.getElementsByClassName("slideNumberText");

let slideIndex = 0;
let timeSlide = 0;
let waitSlide = 2500;

loadCaptionText();
loadNumberText();
