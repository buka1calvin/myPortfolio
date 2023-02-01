 let blogsList = document.getElementById('group')
let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))||[]
function myFunction(){
    for(let bloggs of getBlogInfo){
      let blogHOld =document.createElement('div')
      blogHOld.classList.add(`${bloggs.id}`)
  
    blogHOld.innerHTML =` 
    <img class="blog-image"src="${bloggs.fileName}" alt="">
            <a href="/blog.html?id=${bloggs.id}">
            <h3>${bloggs.title}</h3>
            <p>${bloggs.blogSummary}</p>
        </a>
        
        <span>${bloggs.likes}
            <div id="${bloggs.id}" class="icony"onclick="like(this.id)">
                <img src="/like.svg" alt="">
            </div>
            
    `
    blogsList.appendChild(blogHOld);
    }
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
