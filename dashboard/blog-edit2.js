
let form2=document.getElementById("form2")
let title2=document.forms["form2"]["title"]
let picture=document.forms["form2"]["file"]
let summary=document.forms["form2"]["summary"]
let description=document.getElementById("edit")
const params = (new URL(document.location)).searchParams;
const name = params.get('id')
function blogEdits(){
  
//     let editBlog= JSON.parse(localStorage.getItem('editBlog'))
//     title2.value=editBlog.title
//     summary.value=editBlog.blogSummary
//     editor.html.set(editBlog.description)

//    console.log(editBlog.description)
fetch(`https://buka-dev.onrender.com/api/v1/blogs/${name}`)
.then(res=>{return res.json()})
.then(data=>{
    title2.value=data.title
    summary.value=data.summary
    picture.value=data.picture
    editor.html.set(data.content)
    console.log(data)
    
    
})
.catch(error=>console.log(error))
}
form2.addEventListener("submit",function(e){
    e.preventDefault();
    const token=localStorage.getItem('token')
    fetch(`https://buka-dev.onrender.com/api/v1/blogs/${name}`,{method:"PATCH",headers:{"content-type":"application/json",Authorization:`Bearer ${token}`},
    body:JSON.stringify({
        title:title2.value,
        summary:summary.value,
        picture:picture.value,
        content:description.value
    })})
    .catch(error=>console.log(error))
    // let editBlog= JSON.parse(localStorage.getItem('editBlog'))
    // let blogValues= JSON.parse(localStorage.getItem('blogInfo'))

    // let index = blogValues.findIndex(obj => obj.id== editBlog.id)

    // blogValues[index].title=document.forms["form2"]["title"].value
    // blogValues[index].blogSummary=document.forms["form2"]["summary"].value
    // blogValues[index].description=document.forms["form2"]["description"].value

    // localStorage.setItem('blogInfo', JSON.stringify(blogValues))
    // document.forms["form2"]["title"].value=""
    // document.forms["form2"]["summary"].value=""
    // editor.html.set('')
    
    

})
blogEdits()











































































   