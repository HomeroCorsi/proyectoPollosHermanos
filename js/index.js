// -----------carrusel listeners-----------
let next = document.getElementById("nexte");


let prev = document.getElementById("preve");


next.addEventListener("click", function () {plusSlides(1);});
prev.addEventListener("click",  function () {plusSlides(-1);});
//stackoverflow.com/questions/35509877/event-listener-with-anonymous-function
// --------------EVITAR FUNCIONES ANONIMAS APRENDIMIENTO-----------------

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



// ---------------LINKS NAV BAR---------------

let linkMenu = () => window.location.href = "../html/menuJson.html";


document.getElementById("menuLinkBoton").addEventListener("click", linkMenu);
document.getElementById("menuLinkBoton2").addEventListener("click", linkMenu)


// ------------log in js----------------

let myBlurFunction = function(state) {
    /* state can be 1 or 0 */
    let containerElement = document.getElementById('body');
    let overlayEle = document.getElementById('divLogin');

    if (state) {
        overlayEle.style.display = 'block';
        containerElement.setAttribute('class', 'blur');
    } else {
        overlayEle.style.display = 'none';
        containerElement.setAttribute('class', null);
    }
};

login.addEventListener("click", myBlurFunction);

function cancelarLogIn(a){
    let containerElement = document.getElementById('body');
  let overlayEle = document.getElementById('divLogin');
  overlayEle.style.display = 'none';
  containerElement.removeAttribute('class', 'blur');

}

cancelarLogin.addEventListener("click", cancelarLogIn);
