var toggleButton=document.querySelector("#toggle");
var navList=document.querySelector("#listing");
var links=document.getElementsByClassName("index");
navList.classList.add('active')
toggleButton.addEventListener("click",function(){
navList.classList.toggle('active');
})

for (let btn of links){
    btn.addEventListener("click",function(){
        navList.classList.toggle('active');
        })
}
//sliding part
let slideIndex=1;
showSlides(slideIndex);
setInterval(function(){
    clicks(1);
},8000);
function clicks(x){
    showSlides(slideIndex+=x);
}
function showSlides(x){
    let slidings=document.getElementsByClassName("slide");
    if(x>slidings.length){
        slideIndex=1;
    }
    if(x<1){
        slideIndex=slidings.length;
    }
    for(let i=0;i<slidings.length;i++){
        slidings[i].style.display="none";
    }
    slidings[slideIndex-1].style.display="flex";
}