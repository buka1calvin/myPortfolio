//this is for the navbar toggle
var toggleButton=document.getElementById("toggleBtn");
var navList=document.getElementById("listings");
var indexes=document.getElementsByClassName("indexes");

// navList.classList.add('active')
// toggleButton.addEventListener("click",function(){
// navList.classList.toggle('active');
// })

for (let btn of indexes){
    btn.addEventListener("click",function(){
        navList.classList.toggle('active');
        })
}
//this is for the single blog page
let params = (new URL(document.location)).searchParams;
  let name = params.get('id')
//   let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'));
//   let blogContent = getBlogInfo.find(x => x.id == name)

function myBlog(){
fetch(`https://buka-dev.onrender.com/api/v1/blogs/${name}`)
.then(res=>{return res.json()})
.then(data=>{
    console.log(data)
    let blogging=document.getElementById("articlee");
    let newDiv=document.createElement("div");
    newDiv.innerHTML=  `
    <h1>${data.title}</h1>
    <p class="subtitle">${data.summary}</p>
    <div class="profiling">
    <img class="img-2"src="./profile.JPG" alt="">
    <div>
    <h3>@Bukarani </h3>
    <p>Project Manager</p>
</div>
</div>
    <img class="single-img"src="${data.picture}" alt="">
    <div class="articles">
    <p class="para">
        ${
            data.content
        }
    </p>
    </div>
    `
blogging.appendChild(newDiv);

})
    }
myBlog();


//this is for the form validation
let commentForm=document.getElementById("form");
let comment=document.forms['form']['message'];
let email=document.forms['form']['email'];
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let error1=document.getElementById("error1");
let error2=document.getElementById("error2");
let error3=document.getElementById("error3");
commentForm.addEventListener("submit", async function(e){
    e.preventDefault();
    if(comment.value.length===0){
        comment.style.border="1px solid red";
        error1.style.display="flex";
        comment.focus();
        return false;
    }
    if(comment.value!==""&&email.value.trim()!==""&&email.value.match(mailformat)){
        let params = (new URL(document.location)).searchParams;
  let name = params.get('id')
  const ID=name
  await fetch(`https://buka-dev.onrender.com/api/v1/blogs/${name}/comments`,{method:"POST",
headers:{"content-type":"application/json"},
body:JSON.stringify({
    email:email.value,
    message:comment.value,
    blogId:ID
})
})
.then(res=>{return res.json()})
.then(data=>console.log(data))
.catch(error=>console.log(error.message))
//   let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'));
//     let blogContent = getBlogInfo.find(x => x.id == name)
//     blogContent.commentNbr +=1;
  
//     blogContent.commentValue.push({
//         id:blogContent.commentValue.length +1,
//         commenting:comment.value,
//         emailing:email.value,   
//     })
//   const blogIndex = getBlogInfo.findIndex(x => x.id == name)
//   getBlogInfo[blogIndex] = blogContent;
//   localStorage.setItem('blogInfo',JSON.stringify(getBlogInfo))
  comment.value=""
  email.value=""
    }
    if(email.value.length===0){
        email.style.border="1px solid red";
        error2.style.display="flex";
        email.focus();
        return false;
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
    if(email.value.length>0){
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
//this the 
