const newItemBuffer = document.querySelector('#new-item')
const form = document.querySelector('form')
const itemList = document.querySelector('ul')


function addItem(e){
    let currentTime = new Date()
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
    
    if(newItemBuffer.value.trim()){
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

    } else {
        alert("You did not type anything")
    }
    //Clear the textbox
    newItemBuffer.value = ""
    // console.log("Current Time = ", currentTime.getTime())
}

function removeItem(e){
    
}

//Call EventListener on submit
form.addEventListener('submit', addItem, {capture:true, once:false})