//this is for the navbar toggle
let toggle=document.getElementById("toggleBtn");
let navList=document.getElementById("listing");
//this is for the single blog page
let params = (new URL(document.location)).searchParams;
  let name = params.get('id')
  let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'));
  let blogContent = getBlogInfo.find(x => x.id == name)
  let blogging=document.getElementById("articlee");
function myBlog(){

    let newDiv=document.createElement("div");
    newDiv.innerHTML=  `
    <h1>${blogContent.title}</h1>
    <p class="subtitle">${blogContent.blogSummary}</p>
    <div class="profiling">
    <img class="img-2"src="/profile.JPG" alt="">
    <div>
    <h3>@Bukarani </h3>
    <p>Project Manager</p>
</div>
</div>
    <img class="single-img"src="${blogContent.fileName}" alt="">
    <div class="articles">
    <p >
        ${
            blogContent.description
        }
    </p>
    </div>
    `
blogging.appendChild(newDiv);
}
myBlog();


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
    if(comment.value!==""&&email.value.trim()!==""&&email.value.match(mailformat)){
        let params = (new URL(document.location)).searchParams;
  let name = params.get('id')
  let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'));
    let blogContent = getBlogInfo.find(x => x.id == name)
    blogContent.commentNbr +=1;
    blogContent.commentValue.push({commenting:comment.value});
    blogContent.emailValue.push({emailing:email.value});
  const blogIndex = getBlogInfo.findIndex(x => x.id == name)
  getBlogInfo[blogIndex] = blogContent;
  localStorage.setItem('blogInfo',JSON.stringify(getBlogInfo))
  comment.value=""
  email.value=""
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
    if(email.value.trim()!==""){
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
