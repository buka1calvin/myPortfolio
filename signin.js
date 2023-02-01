
let accountName=document.forms['signin']['Name'];
let email=document.forms['signin']['email'];
let pwd=document.forms['signin']['password'];
let comfirmPWD=document.forms['signin']['Pconfirmation'];
let errorr1=document.getElementById("errorr1")
let errorr2=document.getElementById("errorr2")
let errorr3=document.getElementById("errorr3")
let errorr4=document.getElementById("errorr4")
let errorr5=document.getElementById("errorr5")
let errorr6=document.getElementById("errorr6")
let errorr7=document.getElementById("errorr7")
let mailValid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

signin.addEventListener("submit",function(e){
    e.preventDefault();
    if(accountName.value===""){
        errorr1.style.display="flex";
        accountName.focus();
        return false;
    }
    if(email.value.trim()===""){
        errorr2.style.display="flex";
        email.focus();
        return false;
    }
    else if(!email.value.match(mailValid)){
        errorr6.style.display="flex";
        email.focus();
        return false;
    }
    if(pwd.value.length===0){
        errorr3.style.display="flex";
        pwd.focus();
        return false;
    }
    else if(pwd.value.length<6){
        errorr7.style.display="flex";
        pwd.focus();
        return false;
    }
    if(comfirmPWD.value.length===0){
        errorr4.style.display="flex";
        comfirmPWD.focus();
        return false;
    }
    else if(comfirmPWD.value!==pwd.value){
        errorr4.style.display="none";
        errorr5.style.display="flex";
        comfirmPWD.focus();
        return false;
    }
if(accountName.value.length>0 && email.value.trim()!==""&&email.value.match(mailValid)&&pwd.value!=="" && pwd.value.length>=6 &&comfirmPWD.value!==""&&comfirmPWD.value===pwd.value){
    let signinName=accountName.value;
    let passwordValue=pwd.value;
    localStorage.setItem('username',signinName)
    localStorage.setItem('password',passwordValue)
    accountName.value=""
    email.value=""
    pwd.value=""
    comfirmPWD.value=""
    console.log("success");
}
    


})
accountName.addEventListener("textInput",function(){
    if(accountName.value.length>0){
        accountName.style.borderBottom="3px solid green";
        errorr1.style.display="none";
        return true;
        
    }
})
email.addEventListener("textInput",function(){
if(email.value.trim()===""){
    email.style.borderBottom="3px solid green";
    errorr2.style.display="none";
    return true;   
}
else if(email.value.match(mailValid)){
    email.style.borderBottom="3px solid green";
    errorr6.style.display="none";
    return true;
}
})
pwd.addEventListener("textInput",function(){
    if(pwd.value===""){
        pwd.style.borderBottom="3px solid green";
        errorr3.style.display="none";
        return true;   
    }
    else if(pwd.value.length>=6){
        pwd.style.borderBottom="3px solid green";
        errorr7.style.display="none";
        return true;   
    }
    })
    comfirmPWD.addEventListener("textInput",function(){
        if(comfirmPWD.value===""){
            comfirmPWD.style.borderBottom="3px solid green";
            errorr4.style.display="none";
            return true;   
        }
        else{
            errorr5.style.display="none";
            return true;
        }
        })
let link2=document.getElementById("link2");
link2.addEventListener("click",function(){
    signin.style.display="none";
    form.style.display="flex";
})


