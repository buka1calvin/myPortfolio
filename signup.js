let formValid=document.getElementById("form");
let signin=document.getElementById("signin");
let username=document.forms['form']['Name'];
let password=document.forms['form']['password'];
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let error3=document.getElementById("error3");
let error4=document.getElementById("error4");
let sameName=localStorage.getItem('username')
let samePwd=localStorage.getItem('password')
formValid.addEventListener("submit",async function(e){
    e.preventDefault();
    try{
     const response=await fetch("https://buka-dev.onrender.com/api/v1/login",{method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({
            username:username.value,
            password:password.value
        })
    })
if(response.status!=200){
    console.log(response)
}
else{
    const data= await response.json()
    const accessToken=data.others.token
    localStorage.setItem('token',accessToken)
    console.log(data.others)
     window.location="./dashboard/dashboard.html"
}
    }
    catch(error){
        console.log(error.message)
    }
    
    // if(username.value!==sameName&&password.value!==samePwd){
    //     error4.style.display="flex";
    // }
    // else{
    //     error4.style.display="none";
    // }
if(username.value.trim()===""){
    error1.style.display="flex";
    username.focus();
    return false;
}
if(password.value.length===0){
    error2.style.display="flex";
    password.focus();
    return false;
}
else if(password.value.length<6){
    error3.style.display="flex";
    password.focus();
    return false;
}

})
username.addEventListener("textInput",function(){
    if(username.value.trim()!==""){
        username.style.borderBottom="3px solid green";
        error1.style.display="none";
        return true;
    }
})
password.addEventListener("textInput",function(){
    if(password.value.length>=6){
        password.style.borderBottom="3px solid green";
        error2.style.display="none";
        error3.style.display="none";
        return true;
    }
})
//this is for the form link
let link=document.getElementById("link");
link.addEventListener("click",function(){
    form.style.display="none";
    signin.style.display="flex";
    
})

