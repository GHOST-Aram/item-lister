const newItemBuffer = document.querySelector('#new-item')
const form = document.querySelector('form')
const itemList = document.querySelector('ul')
const filter  = document.querySelector('#filter')


//Onload 
let list

window.addEventListener('load', getList)
//Call EventListener on submit
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let item = createItem()
    render(item)
})

//Call event listener on list to when remove button is clicked
// 
itemList.addEventListener('click', removeItem)




//filtering items
filter.addEventListener('keyup', filterItems)

//

function getList(){
    let storedlist = JSON.parse(window.localStorage.getItem('list'))
    if(Array.isArray(storedlist)){
        //if list exists in localstorage- use the stored list
        list = storedlist
    } else{
        //create an empty list and make local strage
        list = []
        window.localStorage.setItem('list', JSON.stringify(list))
    }
}
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
    removeButton.onclick = "removeButton()"    
    if(listItem.textContent.trim()){
        //Appending items to list
        ulDiv.appendChild(listItem)
        ulDiv.appendChild(removeButton)
        newItemBuffer.value = ""
        return ulDiv
    }  
}

function render(item){
        itemList.appendChild(item)
}
//Renoving by altering DOM
function removeItem(e){
    if(e.target.type === "submit")
        itemList.removeChild(e.target.parentElement)
}


//filter list
function filterItems(e){
   // console.log(filter.value)
    items = itemList.querySelectorAll('li')
    // console.log(Array.from(items))
    Array.from(items).forEach(element =>{
        let itemName = element.textContent.toLowerCase()
        let filterVal = filter.value.toLowerCase()
        if(itemName.indexOf(filterVal) !== -1){
            element.parentElement.style.display = 'flex'
        } else {
            element.parentElement.style.display = 'none'
        }
            
    })
    
}



