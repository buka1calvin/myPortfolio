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
var error2=document.getElementById("error3");
var error4=document.getElementById("error4");
let mailValid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
else if(!email.value.match(mailValid)){
    email.style.border="1px solid red";
    error3.style.display="flex";
    email.focus();
    return false;
}

if(getmessage.value===""){
    getmessage.style.border="1px solid red";
    error4.style.display="flex";
    getmessage.focus();
    return false;
}
//this is for the contact message
if(username.value.length>0 &&email.value.length>0 &&email.value.match(mailValid)&&getmessage.value.length>0){
  
//   let  usernameValue = username.value;
//   let emailValue = email.value;
//   let messageValue = getmessage.value;
  
//   
fetch("https://buka-dev.onrender.com/api/v1/contacts",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify({
        username:username.value,
        email:email.value,
        message:getmessage.value
    })
})
.then(res=>res.json())
.then(data=>console.log(data))
.catch(error=>console.log(error.message))
     username.value=="";
     email.value="";
     getmessage.value=""; 
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
    if(email.value>=0){
        email.style.border="1px solid green";
        error2.style.display="none";
        return true;
    }
    else if(email.value.match(mailValid)){
        error3.style.display="none";
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
//
