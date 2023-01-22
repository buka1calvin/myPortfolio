let blogsList = document.getElementById('group')
let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))||[]
function myFunction(){
    for(let bloggs of getBlogInfo){
      let blogHOld =document.createElement('div')
  
    blogHOld.innerHTML =`
    <img class="blog-image"src="${bloggs.fileName}" alt="">
            <a href="/blog.html">
            <h3>${bloggs.title}</h3>
            <p>${bloggs.blogSummary}</p>
        </a>
            <div class="icony">
                <img src="/like.svg" alt="">
            </div>
    `
    blogsList.appendChild(blogHOld);
    }
    console.log("helo world");
    
}
myFunction();