// // Examine the Document Object
// // console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// // document.title = 123
// console.log(document.body)
// console.log(document.forms)

// const item1 = document.getElementById('item-1')
// console.log(item1)
// item1.textContent = 'Coolio'
// console.log(item1.textContent)
// item1.style.borderBlockColor = 'red'

//GETELEMENTSBYCLASSNAME

// let items = document.getElementsByClassName('list-item')
// console.log(items[1])
// let index = 0
// for(index; index < items.length; index++){
//     items[index].style.color = '#f4f4f4'
    // items[index].style.fontSize = '20px'
// }

// GETELEMENTBYTAG
// let items = document.getElementsByTagName('li')
// console.log(items[1])
// let index = 0
// for(index; index < items.length; index++){
    // items[index].style.color = 'green'
    // items[index].style.fontSize = '20px'
// }

// Queryselector

// const header = document.querySelector('.header')
// header.style.borderBottom = 'solid 4px black'
// const input = document.querySelector("input[type='submit']")
// input.value = 'Send'
// 
// const lastItem = document.querySelector('.list-item:last-child')
// lastItem.style.color = 'orange'
// 
// const secondItem = document.querySelector('.list-item:nth-child(2)')
// secondItem.style.color = 'orange'

//QueryselectorAll
// const f300 = document.querySelectorAll('.fw-300:nth-child(even)')
// console.log(f300)
// let index = 1
// f300.forEach(element => {
    // console.log(`item ${index} ${element.textContent}`)
    // element.style.backgroundColor = 'coral'
    // index+=2})

    // TRAVERSING THE DOM
    // //parentNode
    // console.log(itemList.parentNode.parentNode)
    // itemList.parentNode.parentNode.style.backgroundColor = 'orangered'
    
    //childNode
    // console.log(itemList.childNodes)
    
    //children
    // const items = itemList.children
    // let index = 0
    // for(index; index < items.length; index++){
        // items[index].style.backgroundColor = 'orangered'
    // items[index].style.fontStyle = 'italic'
    // items[index].style.fontWeight = '700'
    // items[index].style.color = 'white'
    // 
    // console.log(`item ${index + 1}: ${items[index].textContent}`)
    // }
    
    // console.log(`First child: ${itemList.firstChild}`)
    
    // firstElementChild
    // console.log("First Element child: ", itemList.firstElementChild.textContent)
    // lastElementChild
    // itemList.lastElementChild.textContent = "I like to learn under high intesity"
    // console.log("Last Element child: ", itemList.lastElementChild.textContent)
    
    // let itemList = document.querySelector('.item-list')
    // nextSibling
    // console.log(itemList.nextSibling)

        // nextElementSibling
        // console.log(itemList.nextElementSibling)

            // previousElementSibling
            // console.log(itemList.previousElementSibling.textContent)
            
//CREAT ELEMENT
// const newDiv = document.createElement('div')
// 
// newDiv.classList.add('hello') 
// newDiv.classList.add('Hello-2','hello-3', 'hello-4')
// newDiv.id = 'idps'
// newDiv.className = 'classic'
// 

//Create a textNode
// newDiv.setAttribute('title', 'The Div')
// console.log(newDiv)
// 
// const newDivText = document.createTextNode('Schooling was boring')
// newDiv.appendChild(newDivText)

//Selcting nested class

// const headContainer = document.querySelector('.main .container')
// headContainer.style.backgroundColor = 'var(--success-color)'
// newDiv.classList.add('font-md', 'fw-500')
// 
// const list = document.querySelector('.main .list')
// headContainer.insertBefore( newDiv, list )

//EVENT HANDLING
//   CLICK Event
const blockBtn  =  document.querySelector('.btn-block')
const btns = document.querySelectorAll('.btn')
const header =  document.querySelector('.header')
const textbox = document.querySelector('input[type=text]')
console.log(textbox.value)
function changeToDark(e){
    document.body.setAttribute('style', 'color:white; background-color:black')
    header.setAttribute('style', 'background-color: orangered')
    btns.forEach(element => {
        element.style.backgroundColor = 'orangered'
    });
    textbox.style.color = 'white'

    console.log(e.offsetX)
    console.log(e.ctrlKey)

}

blockBtn.addEventListener('click', changeToDark, {once:true})

//Double click event
// const blockBtn  =  document.querySelector('.btn-block')

// blockBtn.addEventListener('dblclick', runEvent, {once:true})
// blockBtn.addEventListener('mousedown', runEvent, {once:true})
// blockBtn.addEventListener('mouseup', runEvent, {once:true})


const box  =  document.querySelector('#box')
let currenTime = new Date()

box.addEventListener('mouseenter', runEvent)
box.addEventListener('mouseleave', (e)=>{
    box.classList.remove('linear-gradient') 
    console.log(e.type)
})
box.addEventListener('mouseover', runEvent)
box.addEventListener('mouseout', runEvent)


//Mouse move
const mouseY = document.createElement('h3')
const mouseX = document.createElement('h3')

function runEvent(e){
    box.classList.add('linear-gradient')
    mouseX.textContent = `Mouse X: ${e.offsetX}`
    mouseY.textContent = `Mouse Y: ${e.offsetY}`
    box.appendChild(mouseX)
    box.appendChild(mouseY)
    console.log(e.type)
}

box.addEventListener('mousemove', runEvent)

//KeydownEvent
// textbox.addEventListener('keydown', (e)=>{
//     mouseX.textContent = textbox.value
//     box.appendChild(mouseX)
//     console.log(`Event type: ${currenTime.getTime()/1000} :  ${e.target.value}`)
// })

//kEYUP Event
// textbox.addEventListener('keyup', (e)=>{
//     mouseX.textContent = textbox.value
//     box.appendChild(mouseX)
//     console.log(`Event type: ${currenTime.getTime()/1000} :  ${e.type}`)
// })

//Focus Event
function getEventType(e){
    mouseX.textContent = textbox.value
    box.appendChild(mouseX)
    console.log(e.type)
}
// textbox.addEventListener('blur', getEventType)
textbox.addEventListener('focus', getEventType)
