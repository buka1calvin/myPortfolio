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
// let   TotalMsg=getContactInfo = JSON.parse(localStorage.getItem('users')) || [];

 function showComment(){
    // let params = (new URL(document.location)).searchParams;
    // let name = params.get('id')
    // let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
    // let blogCont = getBlogInfo.find(x => x.id === name) 
 fetch(`https://buka-dev.onrender.com/api/v1/comments`)
    .then(res=>{return res.json()})
    .then(data=>{
        for (let datta of data){
        let div = document.createElement('tr')
        div.innerHTML = `
        <td>${datta._id}</td>
        <td>${datta.message}</td>
        <td>${datta.email}</td>
        <td><img class="heart2"src="/article.svg" alt="">Article ${datta.blogId}</td>
        <td><button type="submit" class="edit">contact arthor</button></td>
        <td><button type="submit"onclick="myDelete('${datta._id}')"class="delete">delete query</button></td>`
             commentAppend.appendChild(div)
             console.log(data)
      }}
    )

  
}
showComment()
async function myDelete(id){
    // let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
    // let blogIndex= getBlogInfo.findIndex(x => x.id == blogId) 
    // let commentIndex= getBlogInfo[blogIndex].commentValue.findIndex(x => x.id == id) 
    // getBlogInfo[blogIndex].commentValue.splice(commentIndex,1)

    // localStorage.setItem('blogInfo', JSON.stringify(getBlogInfo))
    try{
 const res=await fetch(`https://buka-dev.onrender.com/api/v1/comments/${id}`,{method:"DELETE"})

    const data=res.json()
    console.log(data)
      window.location.reload()
    }
    catch(error){
        console.log(error)
    }
}
//this is for the message section



function myFunction(){
    fetch("https://buka-dev.onrender.com/api/v1/contacts")
    .then(res=>{return res.json()})
    .then(message=>{
        for(let msg of message){
        let tableRow = document.createElement('tr')
        tableRow.innerHTML=
        `<td>${msg._id}</td>
        <td>${msg.username}</td>
        <td>${msg.email}</td>
        <td>${msg.message}</td>
        <td><button type="submit" onclick="deleteMessage('${msg._id}')" class="delete">delete query</button></td>
        `
        table.appendChild(tableRow);
    }
}
)     
}
myFunction();
//this is for the message deletion
async function deleteMessage(id){
    //  let index= TotalMsg.findIndex((obj) =>obj.id === id)
    //  TotalMsg.splice(index, 1)
    //   localStorage.setItem('users', JSON.stringify(getContactInfo))
    try{
        const response=await fetch(`https://buka-dev.onrender.com/api/v1/contacts/${id}`,{method:"DELETE"})
        const datas=response.json()
        console.log(datas)
        window.location.reload()
    }
    catch(error){
        console.log(error)
    }
    }
//this is for the blog section
function blogFunc(){
    let params = (new URL(document.location)).searchParams;
    let blogName = params.get('id')
    // let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
    // let blogCont = getBlogInfo.find(y => y.id === blogName)
    fetch("https://buka-dev.onrender.com/api/v1/blogs")
    .then(res=>{return res.json()})
    .then(blogs=>{
    for(let bloggs of blogs){
        let tableRow2=document.createElement("tr")
        tableRow2.innerHTML=`
                        <td>${bloggs._id}</td>
                        <td>${bloggs.title}</td>
                        <td><img class="heart"src="/heart 2.svg" alt=""> ${bloggs.likes} likes</td>
                        <td>${bloggs.comments}Comments</td>
                        <td><button type="submit" class="edit"><a class="blogLink" href="./blog-edits2.html?id=${bloggs._id}"alt="">Edit Blog</a></button></td>
                        <td><button type="submit" class="delete"onclick="delBlog('${bloggs._id}')">Delete Blog</button></td>
        `
        blogShow.appendChild(tableRow2)
    }
})
}
blogFunc();
async function delBlog(id){
    // let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
    // let index3= getBlogInfo.findIndex((obj) =>obj.id === id)

    // getBlogInfo.splice(index3, 1)
   
    //  localStorage.setItem('blogInfo', JSON.stringify(getBlogInfo))
    const token=localStorage.getItem('token')
const res=await fetch(`https://buka-dev.onrender.com/api/v1/blogs/${id}`,{method:"DELETE",headers:
{Authorization:`Bearer ${token}`}
})
const data=await res.json()
console.log(data)
    window.location.reload()
}
//this is for the edit function
// function editBlog(id){
//     // let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
//     // let index4= getBlogInfo.findIndex((obj) =>obj.id === id)

//     // getBlogInfo[index4]
   
//     //  localStorage.setItem('editBlog', JSON.stringify(getBlogInfo[index4]))
//     fetch(`http://localhost:5000/api/v1/blogs/${id}`)
   
//       window.location="blog-edits2.html"
// }