// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){
const windowHeight = window.innerHeight;
reveals.forEach(el=>{
const elementTop = el.getBoundingClientRect().top;
if(elementTop < windowHeight - 100){
el.classList.add('active');
}
});
}

window.addEventListener('scroll', revealOnScroll);

// Navbar efecto Apple
window.addEventListener("scroll", function(){
const nav = document.querySelector("nav");
if(window.scrollY > 50){
nav.style.background = "rgba(0,0,0,0.85)";
nav.style.backdropFilter = "blur(15px)";
}else{
nav.style.background = "rgba(0,0,0,0.5)";
}
});

// Fecha del estreno (AJUSTA A TU FECHA)
const launchDate = new Date("March 07, 2026 17:00:00").getTime();

const timer = setInterval(function(){
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if(distance < 0){
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "¡YA DISPONIBLE!";
  }
}, 1000);

document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let mensaje = document.getElementById("mensaje").value;

let texto = `Hola, soy ${nombre}%0AEmail: ${email}%0AMensaje: ${mensaje}`;

window.open(`https://wa.me/528130986511?text=${texto}`, "_blank");
});