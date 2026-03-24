// TAB SWITCHING

function openTab(tab, btn){

document.querySelectorAll(".section").forEach(s=>{
s.classList.remove("show")
})

document.querySelectorAll(".tab").forEach(t=>{
t.classList.remove("active")
})

const activeSection = document.getElementById(tab)
activeSection.classList.add("show")

btn.classList.add("active")

// force scroll reset AFTER layout updates
setTimeout(()=>{
window.scrollTo({
top:0,
left:0,
behavior:"instant"
})
},50)

}


// MUSIC TOGGLE BUTTON

function toggleMusic(){

const music = document.getElementById("music")

if(!music) return

if(music.paused){
music.play().catch(()=>{})
}else{
music.pause()
}

}


// START MUSIC ON FIRST INTERACTION

document.addEventListener("DOMContentLoaded", function(){

const music = document.getElementById("music")

if(!music) return

function startMusic(){

if(music.paused){
music.play().catch(()=>{})
}

}

document.body.addEventListener("click", startMusic, { once:true })
document.body.addEventListener("touchstart", startMusic, { once:true })
document.body.addEventListener("scroll", startMusic, { once:true })

})


// FALLING PETALS

const petalsContainer = document.querySelector(".petals")

if(petalsContainer){

for(let i=0;i<20;i++){

let petal = document.createElement("span")

petal.style.left = Math.random()*100+"%"
petal.style.animationDuration = (5+Math.random()*5)+"s"
petal.style.animationDelay = Math.random()*5+"s"

petalsContainer.appendChild(petal)

}

}


// FLOATING LIGHTS (RECEPTION PAGE)

document.querySelectorAll(".lights").forEach(container => {

for(let i=0;i<25;i++){

let light=document.createElement("span")

light.style.left=Math.random()*100+"%"
light.style.top=Math.random()*100+"%"
light.style.animationDelay=Math.random()*5+"s"

container.appendChild(light)

}

})


// MOBILE SWIPE NAVIGATION

let touchStartX = 0

document.addEventListener("touchstart", function(e){

touchStartX = e.changedTouches[0].screenX

})

document.addEventListener("touchend", function(e){

let touchEndX = e.changedTouches[0].screenX

// swipe left → ceremony
if(touchStartX - touchEndX > 50){

openTab('ceremony', document.querySelectorAll('.tab')[1])

}

})

const music = document.getElementById("music");

function startMusic(){
if(music && music.paused){
music.play().catch(()=>{});
}
}

document.body.addEventListener("click", startMusic, { once:true });
document.body.addEventListener("touchstart", startMusic, { once:true });
document.body.addEventListener("scroll", startMusic, { once:true });

var countDownDate = new Date("May 10, 2026 10:30:00").getTime();

setInterval(function(){

var now = new Date().getTime();

var distance = countDownDate - now;

document.getElementById("days").innerHTML =
Math.floor(distance/(1000*60*60*24));

document.getElementById("hours").innerHTML =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML =
Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML =
Math.floor((distance%(1000*60))/1000);

},1000);


