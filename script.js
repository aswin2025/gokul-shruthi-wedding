// TAB SWITCHING

function openTab(tab, btn){

document.querySelectorAll(".section").forEach(section=>{
section.classList.remove("show")
})

document.querySelectorAll(".tab").forEach(tab=>{
tab.classList.remove("active")
})

document.getElementById(tab).classList.add("show")

if(btn){
btn.classList.add("active")
}

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

const lightsContainer = document.querySelector(".lights")

if(lightsContainer){

for(let i=0;i<25;i++){

let light = document.createElement("span")

light.style.left = Math.random()*100+"%"
light.style.top = Math.random()*100+"%"
light.style.animationDelay = Math.random()*5+"s"

lightsContainer.appendChild(light)

}

}


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

