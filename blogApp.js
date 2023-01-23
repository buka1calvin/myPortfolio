//this is for the navbar toggle
let toggle=document.getElementById("toggleBtn");
let navList=document.getElementById("listing");

//this is for the form validation
let commentForm=document.getElementById("form");
let comment=document.forms['form']['messager'];
let email=document.forms['form']['email'];
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let error3=document.getElementById("error3");
commentForm.addEventListener("submit",function(e){
    e.preventDefault();
    if(comment.value.trim()===""){
        comment.style.border="1px solid red";
        error1.style.display="flex";
        comment.focus();
        return false;
    }
    if(email.value.trim()===""){
        email.style.border="1px solid red";
        error2.style.display="flex";
        email.focus();
        return true;
    }
    else if(!email.value.match(mailformat)){
        email.style.border="1px solid red";
        error3.style.display="flex";
        email.focus();
        return false;
    }
})
comment.addEventListener("textInput",function(){
    if(comment.value.trim()===""){
        comment.style.border="1px solid transparent";
        error1.style.display="none";
        return true;
    }
})
email.addEventListener("textInput",function(){
    if(email.value.trim()===""){
        email.style.border="1px solid transparent";
        error2.style.display="none";
        return true;
    }
    else if(email.value.match(mailformat)){
        email.style.border="1px solid transparent";
        error3.style.display="none";
        return true;
    }
})
let params = (new URL(document.location)).searchParams;
  let name = params.get('id')
  let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'));


const blogContent = getStorage.find(x => x.id == name)