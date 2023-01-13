var toggleButton=document.getElementById("toggle");
var navList=document.getElementById("listing");
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