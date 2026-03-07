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



// NAVBAR EFECTO APPLE

window.addEventListener("scroll", function(){

const nav = document.querySelector("nav");

if(!nav) return;

if(window.scrollY > 50){

nav.style.background = "rgba(0,0,0,0.85)";
nav.style.backdropFilter = "blur(15px)";

}else{

nav.style.background = "rgba(0,0,0,0.5)";

}

});



// FECHA DEL LANZAMIENTO

const launchDate = new Date("March 07, 2026 17:00:00").getTime();



// CONTADOR

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = launchDate - now;



const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);



const d=document.getElementById("days");
const h=document.getElementById("hours");
const m=document.getElementById("minutes");
const s=document.getElementById("seconds");

if(d) d.innerHTML = days;
if(h) h.innerHTML = hours;
if(m) m.innerHTML = minutes;
if(s) s.innerHTML = seconds;



// CUANDO EL CONTADOR LLEGA A 0

if(distance <= 0){

clearInterval(timer);

const titulo=document.getElementById("titulo-lanzamiento");
const contador=document.getElementById("contador");
const lanzamiento=document.getElementById("lanzamiento");

if(titulo) titulo.innerText = "YA DISPONIBLE";
if(contador) contador.style.display = "none";
if(lanzamiento) lanzamiento.style.display = "block";

if(d) d.innerHTML = "0";
if(h) h.innerHTML = "0";
if(m) m.innerHTML = "0";
if(s) s.innerHTML = "0";



// MOSTRAR BANNER

const banner=document.getElementById("banner-lanzamiento");
if(banner) banner.classList.add("visible");



// ACTIVAR LUCES

const luces=document.querySelector(".concert-lights");
if(luces) luces.classList.add("luces-estreno");



// ACTIVAR GLOW SPOTIFY

const spotify=document.querySelector(".spotify-btn");
if(spotify) spotify.classList.add("spotify-glow");

}

},1000);



// FORMULARIO WHATSAPP

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;
let email = document.getElementById("email").value;
let mensaje = document.getElementById("mensaje").value;

let texto = `Hola, soy ${nombre}%0AEmail: ${email}%0AMensaje: ${mensaje}`;

window.open(`https://wa.me/528130986511?text=${texto}`, "_blank");

});

}


const songs=[
{
title:"Mr Tak",
src:"https://res.cloudinary.com/du5xkuaf4/video/upload/v1772916930/ENCUENTRO_NORTEN%CC%83O_-_Mister_Tak_hj8jwu.mp3",
cover:"https://res.cloudinary.com/du5xkuaf4/image/upload/v1772916922/A8EBDBB6-6987-4FB9-A4F1-B8AE870ED434_oxedj1.png"
},
{
title:"Ni siquiera como amigo",
src:"https://res.cloudinary.com/du5xkuaf4/video/upload/v1772917800/ENCUENTRO_NORTEN%CC%83O_-_Ni_siquiera_como_amigos_s5bzno.mp3",
cover:"https://res.cloudinary.com/du5xkuaf4/image/upload/v1772917795/ni_siquiera_como_amigo_d5ged0.jpg"
},
{
title:"Por si no lo sabías",
src:"https://res.cloudinary.com/du5xkuaf4/video/upload/v1772917747/Por_si_no_lo_sabias_Debe_haber_otro_amor_rtzsqv.mp3",
cover:"https://i.imgur.com/bIWLixE.jpeg"
}
];

let songIndex=0;

const player=document.getElementById("player");
const playBtn=document.getElementById("play");
const prevBtn=document.getElementById("prev");
const nextBtn=document.getElementById("next");
const title=document.getElementById("song-title");
const cover=document.getElementById("cover");
const progress=document.getElementById("progress");
const progressContainer=document.querySelector(".progress-container");
const current=document.getElementById("current");
const duration=document.getElementById("duration");

function loadSong(song){
title.textContent=song.title;
player.src=song.src;
cover.src=song.cover;
}

loadSong(songs[songIndex]);

playBtn.addEventListener("click",()=>{
if(player.paused){
player.play();
playBtn.innerHTML='<i class="fas fa-pause"></i>';
}else{
player.pause();
playBtn.innerHTML='<i class="fas fa-play"></i>';
}
});

prevBtn.addEventListener("click",()=>{
songIndex--;
if(songIndex<0) songIndex=songs.length-1;
loadSong(songs[songIndex]);
player.play();
});

nextBtn.addEventListener("click",()=>{
songIndex++;
if(songIndex>songs.length-1) songIndex=0;
loadSong(songs[songIndex]);
player.play();
});

player.addEventListener("timeupdate",()=>{

const{duration:dur,currentTime}=player;

if(dur){

const percent=(currentTime/dur)*100;
progress.style.width=percent+"%";

current.textContent=formatTime(currentTime);
duration.textContent=formatTime(dur);

}

});

function formatTime(time){

const min=Math.floor(time/60);
const sec=Math.floor(time%60).toString().padStart(2,"0");
return min+":"+sec;

}

progressContainer.addEventListener("click",(e)=>{

const width=progressContainer.clientWidth;
const clickX=e.offsetX;
const dur=player.duration;

player.currentTime=(clickX/width)*dur;

});