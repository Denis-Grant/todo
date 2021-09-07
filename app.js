const tbody = document.querySelector('tbody')
const todoItem = document.getElementById('todo-item')
const createBtn = document.getElementById('create-btn')
const form = document.querySelector('form')

const table = document.querySelector('table')

form.addEventListener('click', (e)=>{
    console.log(e.target)
    if (e.target.id == 'create-btn' && todoItem.value.length > 0) {
        tbody.innerHTML += `<tr>
            <th scope="row">1</th>
            <td>${todoItem.value}</td>
            <td class="d-flex justify-content-end"><div class="btn btn-outline-primary del-key">Delete</div></td>
          </tr>`
        
          todoItem.value = "";
    }

})

// document.addEventListener('click', ()=>{

// })
// if (typeof delKey !== 'undefined') {
//     delKey.addEventListener('click', (e)=>{
//         console.log(e.target)
//     })
// }

