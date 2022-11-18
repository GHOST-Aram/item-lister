const newItemBuffer = document.querySelector('#new-item')
const form = document.querySelector('form')
const itemList = document.querySelector('ul')
console.log(form)

function addItem(e){
    e.preventDefault()
    //List div
    const ulDiv = document.createElement('div')
    ulDiv.classList.add(
        "flex", "item", "border-top", "pbs-1"
    )
    //list li item
    const listItem = document.createElement('li')
    listItem.classList.add(
        "list-item", "fw-300", "font-sm", "border-rounded"
    )
    listItem.textContent = newItemBuffer.value
    
    //Remove button
    const removeButton = document.createElement('button')
    removeButton.classList.add(
        "fw-300", "p-1" ,"border-rounded", "font-sm" ,
        "bg-danger", "btn-sm", "text-light","border-none"
    )
    removeButton.textContent = "Remove"

    //Appending items to list

    ulDiv.appendChild(listItem)
    ulDiv.appendChild(removeButton)
    itemList.appendChild(ulDiv)
    
    //Clear the textbox
    newItemBuffer.value = ""
}

//Call EventListener on submit
form.addEventListener('submit', addItem, {capture:true, once:true})