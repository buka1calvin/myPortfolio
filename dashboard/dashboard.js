let table =document.getElementById('table')
let   TotalMsg=getContactInfo = JSON.parse(localStorage.getItem('users')) || [];

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
        <td><button type="submit" onclick="deleteMessage(${message.id})" class="delete">delete query</button></td>
        `
        table.appendChild(tableRow);
    }
    let setcontactInfo = localStorage.setItem('users', JSON.stringify(getContactInfo))
    console.log('success')
}
myFunction();