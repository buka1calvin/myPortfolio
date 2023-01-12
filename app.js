var toggleButton=document.getElementById("toggle");
var navList=document.getElementById("listing");
toggleButton.addEventListener("click",function(){
navList.classList.toggle('active');
})