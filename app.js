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
var form=document.getElementById("form");
let username=document.forms['form']['username'];
let email=document.forms['form']['email'];
let getmessage=document.forms['form']['message'];
var error1=document.getElementById("error1");
var error2=document.getElementById("error2");
var error4=document.getElementById("error4");
form.addEventListener("submit",function(e){
e.preventDefault();

if(username.value===""){
    username.style.border="1px solid red";
    error1.style.display="flex";
    username.focus();
    return false;
}
if(email.value===""){
    email.style.border="1px solid red";
    error2.style.display="flex";
    email.focus();
    return false;
}

if(getmessage.value===""){
    getmessage.style.border="1px solid red";
    error4.style.display="flex";
    getmessage.focus();
    return false;
}
else{
    console.log("success");
}
})
//adding event listeners to input and text area
username.addEventListener("textInput",function(){
    if(username.value>=0){
        username.style.border="1px solid green";
        error1.style.display="none";
        return true;
    }
})
email.addEventListener("textInput",function(){
    if(email.value){
        email.style.border="1px solid green";
        error2.style.display="none";
        return true;
    }
})
getmessage.addEventListener("textInput",function(){
    if(getmessage.value>=0){
        getmessage.style.border="1px solid green";
        error4.style.display="none";
        return true;
    }
})
