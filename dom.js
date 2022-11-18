const textbox = document.querySelector('input[type="text"]')
const select = document.querySelector('select')
const form = document.querySelector('form')
const itemList = document.querySelector('.item-list')

// textbox.addEventListener('cut', () => {
    // alert(`Text has been saved on clipbaord; ${textbox.value}`)
// })
// 
// // textbox.addEventListener('paste', (e) => {
    // // console.log(`Item pasted by event ${e.type}`)
// })

//INPUT EVENT 
// textbox.addEventListener('input', (e) => {
    // console.log(`Event type  ${e.type}`)
// })

        //CHANGE EVENT
    function applyChange(e){
        textbox.value = select.value
        console.log(e.type)
    }
    // select.addEventListener('change', applyChange)

    //SUBMIT EVENT
    function addListItem(e){
        e.preventDefault()
        const listItem = document.createElement('li')
        listItem.classList.add("list-item", "p-1", "fw-300", "font-sm",
                                 "border-top", "border-rounded")
        listItem.textContent = textbox.value
        itemList.appendChild(listItem)
        console.log(e.type)
    }

    form.addEventListener('submit', addListItem)
