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
   let div = document.createElement('tr')
   div.innerHTML = `
   <td>${value.id}</td>
   <td>${value.commentValue[0].commenting}</td>
   <td>${value.emailValue[0].emailing}</td>
   <td><img class="heart2"src="/article.svg" alt=""> ${value.id} Articles</td>
   <td><button type="submit" class="edit">contact arthor</button></td>
   <td><button type="submit"onclick="myDelete(${value.id})"class="delete">delete query</button></td>`
        commentAppend.appendChild(div)

 }
}
showComment()
function myDelete(id){
    let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
    let index2= getBlogInfo.findIndex((obj) =>obj.id === id)

    getBlogInfo.splice(index2, 1)
   
     localStorage.setItem('blogInfo', JSON.stringify(getBlogInfo))
   
      window.location.reload()
}
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
    let name = params.get('id')
    let getBlogInfo=JSON.parse(localStorage.getItem('blogInfo'))
    let blogCont = getBlogInfo.find(x => x.id === name)
    for(let values of getBlogInfo){
        let tableRow2=document.createElement("tr")
        tableRow2.innerHTML=`
                        <td>${values.id}</td>
                        <td>${values.title}</td>
                        <td>${values.commentNbr} views</td>
                        <td><img class="heart"src="/heart 2.svg" alt=""> ${values.likes} likes</td>
                        <td>${values.commentNbr}Comments</td>
                        <td><button type="submit" class="edit">Edit Blog</button></td>
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