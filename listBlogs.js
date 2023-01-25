let blogsList = document.getElementById('group')
let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))||[]
function myFunction(){
    for(let bloggs of getBlogInfo){
      let blogHOld =document.createElement('div')
  
    blogHOld.innerHTML =`
    <img class="blog-image"src="${bloggs.fileName}" alt="">
            <a href="/blog.html?id=${bloggs.id}">
            <h3>${bloggs.title}</h3>
            <p>${bloggs.blogSummary}</p>
        </a>
        
        <span>${bloggs.likes}<span>
            <div id="icon"class="icony"onclick="like()">
                <img src="/like.svg" alt="">
            </div>
    `
    blogsList.appendChild(blogHOld);
    }
}
myFunction()
function like(){
    let params = (new URL(document.location)).searchParams;
    let name = params.get('id')
    let getBlogInfo =JSON.parse(localStorage.getItem('blogInfo')) ;
// wibuke ko getStorage is an array
let blogContent = getBlogInfo.find(x => x.id == name) 
blogContent.likes +=1

const blogIndex = getBlogInfo.findIndex(x => x.id == name)

getBlogInfo[blogIndex] = blogContent;

localStorage.setItem('blogInfo',JSON.stringify(getBlogInfo));
console.log("success")
window.location.reload()
}
