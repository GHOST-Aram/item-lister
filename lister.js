const newItemBuffer = document.querySelector('#new-item')
const form = document.querySelector('form')
const itemList = document.querySelector('ul')

let itemsArray = []

function createItem(){
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
        
    if(listItem.textContent.trim()){
        //Appending items to list
        ulDiv.appendChild(listItem)
        ulDiv.appendChild(removeButton)
        newItemBuffer.value = ""
    } else {
        alert("You did not type anything")
    }
    return ulDiv
}

function addToItemsArray(item){
    itemsArray.push(item)
}

function renderList(){
    itemsArray.forEach(element => {
        itemList.appendChild(element)
    });
    
}
function removeItem(e){
    itemList.removeChild(e.target.parentElement)
}

//Call EventListener on submit
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let item = createItem()
    addToItemsArray(item)
    renderList()
})

