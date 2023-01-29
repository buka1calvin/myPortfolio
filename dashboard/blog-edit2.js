
let form2=document.getElementById("form2")
let title2=document.forms["form2"]["title"]
let summary=document.forms["form2"]["summary"]
let description=document.forms["form2"]["description"]
function blogEdits(){
  
    let editBlog= JSON.parse(localStorage.getItem('editBlog'))
    title2.value=editBlog.title
    summary.value=editBlog.blogSummary
    editor.html.set(editBlog.description)

   console.log(editBlog.description)
}



form2.addEventListener("submit",function(e){
    e.preventDefault();
    let editBlog= JSON.parse(localStorage.getItem('editBlog'))
    let blogValues= JSON.parse(localStorage.getItem('blogInfo'))

    let index = blogValues.findIndex(obj => obj.id== editBlog.id)

    blogValues[index].title=document.forms["form2"]["title"].value
    blogValues[index].blogSummary=document.forms["form2"]["summary"].value
    blogValues[index].description=document.forms["form2"]["description"].value

    localStorage.setItem('blogInfo', JSON.stringify(blogValues))
    document.forms["form2"]["title"].value=""
    document.forms["form2"]["summary"].value=""
    editor.html.set('')
    
    

})

blogEdits()










































































   