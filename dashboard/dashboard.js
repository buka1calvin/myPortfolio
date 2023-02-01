//this about the visiblity
let blog=document.getElementById("dashdash");
let querry=document.getElementById("manQuerry");
let comments=document.getElementById("manUser")
let list=document.getElementsByClassName("indexes")
let link=document.getElementsByClassName("index")
let link2=document.getElementsByClassName("index2")
let link3=document.getElementsByClassName("index3")

link[0].addEventListener("click",function(){
    blog.style.display="flex";
    querry.style.display="none";
    comments.style.display="none";
})
link2[0].addEventListener("click",function(){
    querry.style.display="flex";
    blog.style.display="none";
    comments.style.display="none";
})
link3[0].addEventListener("click",function(){
    comments.style.display="flex";
    blog.style.display="none";
    querry.style.display="none";
})

let table =document.getElementById('table')
let commentAppend=document.getElementById("table2")
let blogShow=document.getElementById("table3")
let   TotalMsg=getContactInfo = JSON.parse(localStorage.getItem('users')) || [];

function showComment(){
    let params = (new URL(document.location)).searchParams;
    let name = params.get('id')
    let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
    let blogCont = getBlogInfo.find(x => x.id === name)   
for(let value of getBlogInfo){
    for(let val of value.commentValue){
        let div = document.createElement('tr')
        div.innerHTML = `
        <td>${val.id}</td>
        <td>${val.commenting}</td>
        <td>${val.emailing}</td>
        <td><img class="heart2"src="/article.svg" alt="">Article ${value.id}</td>
        <td><button type="submit" class="edit">contact arthor</button></td>
        <td><button type="submit"onclick="myDelete(${value.id},${val.id})"class="delete">delete query</button></td>`
             commentAppend.appendChild(div)
      }
    }
  
}
showComment()
function myDelete(blogId,id){
    let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
    let blogIndex= getBlogInfo.findIndex(x => x.id == blogId) 
    let commentIndex= getBlogInfo[blogIndex].commentValue.findIndex(x => x.id == id) 
    getBlogInfo[blogIndex].commentValue.splice(commentIndex,1)

    localStorage.setItem('blogInfo', JSON.stringify(getBlogInfo))
   
      window.location.reload()
}
//this is for the message section
function deleteMessage(id){

 let index= TotalMsg.findIndex((obj) =>obj.id === id)

 TotalMsg.splice(index, 1)

  localStorage.setItem('users', JSON.stringify(getContactInfo))

   window.location.reload()
}


function myFunction(){
    for(let message of TotalMsg){
        let tableRow = document.createElement('tr')
        tableRow.innerHTML=
        `<td>${message.id}</td>
        <td>${message.usernameValue}</td>
        <td>${message.emailValue}</td>
        <td>${message.messageValue}</td>
        <td><button type="submit" onclick="deleteMessage(${message.id})" class="delete">delete query</button></td>
        `
        table.appendChild(tableRow);
    }
     
}
myFunction();
//this is for the blog section
function blogFunc(){
    let params = (new URL(document.location)).searchParams;
    let blogName = params.get('id')
    let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
    let blogCont = getBlogInfo.find(y => y.id === blogName)
    for(let values of getBlogInfo){
        let tableRow2=document.createElement("tr")
        tableRow2.innerHTML=`
                        <td>${values.id}</td>
                        <td>${values.title}</td>
                        <td>${values.commentNbr} views</td>
                        <td><img class="heart"src="/heart 2.svg" alt=""> ${values.likes} likes</td>
                        <td>${values.commentValue.length}Comments</td>
                        <td><button type="submit" class="edit"onclick="editBlog(${values.id})">Edit Blog</button></td>
                        <td><button type="submit" class="delete"onclick="delBlog(${values.id})">Delete Blog</button></td>
        `
        blogShow.appendChild(tableRow2)
    }
}
blogFunc();
function delBlog(id){
    let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
    let index3= getBlogInfo.findIndex((obj) =>obj.id === id)

    getBlogInfo.splice(index3, 1)
   
     localStorage.setItem('blogInfo', JSON.stringify(getBlogInfo))
   
      window.location.reload()
}
//this is for the edit function
function editBlog(id){
    let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
    let index4= getBlogInfo.findIndex((obj) =>obj.id === id)

    getBlogInfo[index4]
   
     localStorage.setItem('editBlog', JSON.stringify(getBlogInfo[index4]))
   
      window.location="blog-edits2.html"
}