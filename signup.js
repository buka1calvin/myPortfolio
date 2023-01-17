let formValid=document.getElementById("form");
let signin=document.getElementById("signin");
let username=document.forms['form']['Name'];
let password=document.forms['form']['password'];
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
formValid.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("success");
if(username.value===""){
    error1.style.display="flex";
    username.focus();
    return false;
}
if(password.value<6){
    error2.style.display="flex";
    password.focus();
    return false;
}

})
username.addEventListener("textInput",function(){
    if(username.value===""){
        username.style.borderBottom="3px solid green";
        error1.style.display="none";
        return true;
    }
})
password.addEventListener("textInput",function(){
    if(password.value===""){
        password.style.borderBottom="3px solid green";
        error2.style.display="none";
        return true;
    }
})
//this is for the form link
let link=document.getElementById("link");
link.addEventListener("click",function(){
    form.style.display="none";
    signin.style.display="flex";
    
})

