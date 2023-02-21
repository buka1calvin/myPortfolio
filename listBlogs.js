 let blogsList = document.getElementById('group')
// let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))||[]
 async function myFunction(){
    // for(let bloggs of getBlogInfo){
 
 await fetch("https://buka-dev.onrender.com/api/v1/blogs")
 .then(res=>{return res.json()})
 .then(data=>{
    for(let datas of data){
        let blogHOld =document.createElement('div')
    blogHOld.classList.add(`${datas._id}`)
    blogHOld.innerHTML =` 
 <img class="blog-image"src="${datas.picture}" alt="">
         <a href="./blog.html?id=${datas._id}">
         <h3>${datas.title}</h3>
         <p>${datas.summary}</p>
     </a>
         <div id="${datas._id}" class="icony"onclick="like(this._id)">
         <img src="/like.svg" alt="">
     </div>
     `
    //  <span>${bloggs.likes}
    //      <div id="${datas._id}" class="icony"onclick="like(this.id)">
    //          <img src="/like.svg" alt="">
    //      </div>
 blogsList.appendChild(blogHOld)
 console.log(data)
}
})
 .catch(error=>console.log(error.message))
    
}
myFunction();

function like(id){

let getBlogInfo =JSON.parse(localStorage.getItem('blogInfo')) ;
// // wibuke ko getStorage is an array
let blogContent = getBlogInfo.find(x => x.id == id) 
blogContent.likes=blogContent.likes+1;
let blogIndex = getBlogInfo.findIndex(x => x.id == id)
getBlogInfo[blogIndex] = blogContent; 
localStorage.setItem('blogInfo',JSON.stringify(getBlogInfo));
window.location.reload();
}
