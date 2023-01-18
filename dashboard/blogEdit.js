//this is for the text editor
new FroalaEditor('textarea');
//
let blogForm=document.getElementById("form");
let title=document.forms['form']['title'];
let fileName=document.forms['form']['file'];
let description=document.forms['form']['description'];
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let error3=document.getElementById("error3");
let filePath=fileName.value;
let fileExtension=/(\.jpg|\.jpeg|\.png|\.gif)$/i;
blogForm.addEventListener("submit",function(e){
    e.preventDefault();
    if(title.value===""){
        error1.style.display="flex";
        title.style.border="1px solid red";
        title.focus();
        return false;
    }
    if(!fileExtension.exec(filePath)){
        error2.style.display="flex";
        fileName.style.border="1px solid red";
        fileName.focus();
        return false;
    }
    if(description.value===""){
        error3.style.display="flex";
        description.focus();
        return false;
    }
})
title.addEventListener("textInput",function(){
    if(title.value===""){
        error1.style.display="none";
        title.style.border="1px solid transparent";
        return true;
    }
})
fileName.addEventListener("change",function(){
    if (fileExtension.exec(filePath)) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById(
                'imagePreview').innerHTML =
                '<img src="' + e.target.result
                + '"/>';
        }; 
        reader.readAsDataURL(fileName.files[0]);
    }
})
description.addEventListener("textInput",function(){
    if(description.value===""){
        error1.style.display="none";
        description.style.border="1px solid transparent";
        return true;
    }
})