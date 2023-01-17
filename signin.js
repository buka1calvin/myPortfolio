
let accountName=document.forms['signin']['Name'];
let email=document.forms['signin']['email'];
let pwd=document.forms['signin']['password'];
let comfirmPWD=document.forms['signin']['Pconfirmation'];
let errorr1=document.getElementById("errorr1")
let errorr2=document.getElementById("errorr2")
let errorr3=document.getElementById("errorr3")
let errorr4=document.getElementById("errorr4")
let errorr5=document.getElementById("errorr5")

signin.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("success");
    if(accountName.value===""){
        errorr1.style.display="flex";
        accountName.focus();
        return false;
    }
    if(email.value===""){
        errorr2.style.display="flex";
        email.focus();
        return false;
    }
    if(pwd.value===""){
        errorr3.style.display="flex";
        pwd.focus();
        return false;
    }
    if(comfirmPWD.value===""){
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
})
accountName.addEventListener("textInput",function(){
    if(accountName.value===""){
        accountName.style.borderBottom="3px solid green";
        errorr1.style.display="none";
        return true;
        
    }
})
email.addEventListener("textInput",function(){
if(email.value===""){
    email.style.borderBottom="3px solid green";
    errorr2.style.display="none";
    return true;   
}
})
pwd.addEventListener("textInput",function(){
    if(pwd.value===""){
        pwd.style.borderBottom="3px solid green";
        errorr3.style.display="none";
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


