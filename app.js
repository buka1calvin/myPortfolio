var toggleButton=document.getElementById("toggle");
var navList=document.getElementById("listing");
var indexes=document.getElementsByClassName("indexes");

navList.classList.add('active')
toggleButton.addEventListener("click",function(){
navList.classList.toggle('active');
})

for (let btn of indexes){
    btn.addEventListener("click",function(){
        navList.classList.toggle('active');
        })
}