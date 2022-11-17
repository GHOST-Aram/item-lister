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
const f300 = document.querySelectorAll('.fw-300:nth-child(even)')
console.log(f300)
let index = 1
f300.forEach(element => {
    console.log(`item ${index} ${element.textContent}`)
    element.style.backgroundColor = 'coral'
    index+=2})