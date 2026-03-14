function openTab(tab,btn){

document.querySelectorAll(".section").forEach(section=>{
section.classList.remove("show")
})

document.querySelectorAll(".tab").forEach(tab=>{
tab.classList.remove("active")
})

document.getElementById(tab).classList.add("show")

btn.classList.add("active")

}

function toggleMusic(){

var music=document.getElementById("music")

if(music.paused){
music.play()
}else{
music.pause()
}

}

const petalsContainer = document.querySelector(".petals");

for(let i=0;i<20;i++){
let petal=document.createElement("span");

petal.style.left=Math.random()*100+"%";
petal.style.animationDuration=(5+Math.random()*5)+"s";
petal.style.animationDelay=Math.random()*5+"s";

petalsContainer.appendChild(petal);
}

const lightsContainer=document.querySelector(".lights");

if(lightsContainer){
for(let i=0;i<25;i++){
let light=document.createElement("span");

light.style.left=Math.random()*100+"%";
light.style.top=Math.random()*100+"%";
light.style.animationDelay=Math.random()*5+"s";

lightsContainer.appendChild(light);
}
}

const music = document.getElementById("music");

function startMusic(){
music.play().catch(()=>{});
document.removeEventListener("click", startMusic);
document.removeEventListener("scroll", startMusic);
document.removeEventListener("touchstart", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("scroll", startMusic);
document.addEventListener("touchstart", startMusic);
