const title = document.querySelector("#maintitle");

let posY =0;

// window.setInterval(()=>{
//     let posX = Math.random()*window.innerWidth;
//     posY = Math.random()*window.innerHeight;
//     title.style.left = `${posX}px`;
//     title.style.top = `${posY}px`;
// },2000);


window.addEventListener("keydown",(e)=>{
    posY-=10;
    title.style.top = `${posY}px`;
    
});