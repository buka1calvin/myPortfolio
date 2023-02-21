//this is for the text editor


// const toBase64 = file =>new Promise((resolve, reject)=>{
//     const reader= new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload=()=>resolve(reader.result);
//     reader.onerror=error=>reject(error);
//  });
//this is for the validation
const tokenn=localStorage.getItem('token')
let submitBtn=document.getElementById("submit");
let blogForm=document.getElementById("form");
let blogSummary=document.forms['form']['summary']
let title=document.forms['form']['title']; 
let fileName ="";
let description=document.getElementById("edit");
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let error3=document.getElementById("error3");
let error4=document.getElementById("error4");
document.getElementById('filedocs').addEventListener('change',function(){
    const reader=new FileReader();
    reader.readAsDataURL(this.files[0])
    reader.addEventListener('load',()=>{
    fileName=reader.result;
    })

})
blogForm.addEventListener("submit",async function(e){
    e.preventDefault();
    if(title.value===""){
        error1.style.display="flex";
        title.style.border="1px solid red";
        title.focus();
        return false;
    }
    if(blogSummary.value===""){
        error4.style.display="flex"
        blogSummary.style.border="1px solid red"
        blogSummary.focus();
        return false;
    }
    if(!fileName){
        error2.style.display="flex"
    }
    else{

        error2.style.display="none";

    }
    if(description.value===""){
        error3.style.display="flex";
        description.focus();
        return false;
    }
    if(title.value!=="" && blogSummary.value !==""&&fileName&&description.value!==""){
    //     //this is for converting the
    //     let   convert = await toBase64(fileName); 
    //     console.log(convert)
    // let likes=0
        // let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))||[]
        // getBlogInfo.push(
        //     {
                
        //         id:getBlogInfo.length +1,
        //         likes:likes,
        //         commentNbr:0,
        //         commentValue:[],
        //         emailValue:[],
        //         title:title.value,
        //         fileName:convert,
        //         blogSummary:blogSummary.value,
        //         description:description.value
        //     }
        // )
        // localStorage.setItem('blogInfo',JSON.stringify(getBlogInfo))
        try{
            const formData = new FormData()
            formData.append("title", title.value)
            formData.append("summary", blogSummary.value)
            formData.append("picture",document.getElementById('filedocs').files[0])
            formData.append("content",description.value)
            const response= await fetch("https://buka-dev.onrender.com/api/v1/blogs",{method:"POST",headers:{Authorization:`Bearer ${tokenn}`},body:formData}
            )
            const data=await response.json();
            console.log(data);
            
            document.querySelector("form").reset()
                }
                catch(error){
                    console.log(error.message)
                }
       
      
    }
}
)
title.addEventListener("textInput",function(){
    if(title.value!==""){
        error1.style.display="none";
        title.style.border="1px solid transparent";
        return true;
}
})

description.addEventListener("textInput",function(){
    if(description.value.length>0){
        error3.style.display="none";
        description.style.border="1px solid transparent";
        return true;
    }
})
blogSummary.addEventListener("textInput",function(){
    if(blogSummary.value!==""){
        error4.style.display="none"
        blogSummary.style.border="1px solid transparent"
        return true;
    }
})



//  async function uploadBtnFunct(){

//     let fileName =document.getElementById("filedocs").files[0];
    
//     if(!fileName){
//         error2.style.display="flex"
//         }
//           let   convert = await toBase64(fileName);
//             error2.style.display="none";
            

// }