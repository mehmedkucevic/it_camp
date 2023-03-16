// console.dir(document)
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);

// document.title = "DOM"
// console.log(document.title)

// // headerTitle.textContent = "novo"

// // Get element by id

// const headerTitle = document.getElementById("logo")
// console.log(headerTitle)

// // Promena stilova

// headerTitle.style.borderBottom= "solid 3px #0000"

// Get elements by class name

const containers = document.getElementsByClassName("main");
// console.log(container)

const main = containers[0]

// main.style.backgroundColor = "red";
// main.style.backgroundColor = "#ababab";

// Get elements by tag name

const listItems = document.getElementsByTagName("li")
console.log(listItems)

// listItems.style.color= "blue"  ne radi na ovakav nacin mora preko iteracije

// for(i=0;i<listItems.length;i++){
// if(i===1){
//     listItems[i].style.color = "brown"
// }else{
//     listItems[i].style.color = "blue"
// }
// }



// Query selector

// const firstLogoId = document.querySelector("#logo")
// const firstCont = document.querySelector(".main")
// const firstLi = document.querySelector("li")

// console.log(firstLogoId)
// console.log(firstCont)
// console.log(firstLi)

// firstLi.textContent = "first item"

// const input = document.querySelector("input")

const input2 = document.querySelector("input[type='email'")
input2.placeholder = "email"

// Query selector all

// const listItems2 = document.querySelectorAll("li")
// console.log(listItems2)

// const evenLi = document.querySelectorAll("li:nth-child(even)")
// const oddnLi = document.querySelectorAll("li:nth-child(odd)")
 
// for(let i =0;i<=oddnLi;i++){
// oddLi[i].style.backgroundColor="red"
// evenLi[i].style.backgroundColor="blue"
// }

// parent node

// const title = document.getElementById("add")
// console.log(title.parentNode)

// parent element
const title = document.getElementById("add")
console.log(title.parentElement)

// childnodes (vraca sve elemente i razmake)

// const container3 = document.querySelector(".main")
// console.log(container3)

// children (vraca samo elemente)

// const conainer4 = document.querySelector(".main")
// console.log(container4)

// firstElementChild

const container0 = document.querySelector(".main")
console.log(main.firstElementChild)

// lastElementChild
// nexteElemenSibling
// previousElementSibling

// createElement

const newDiv = document.createElement("div")

// addElement

newDiv.className = "newDiv"



// add id

newDiv.id = "newId"

const textForNewDiv = (document.createTextNode = "hello world")

main.append(newDiv)

main.append(textForNewDiv)

input2.setAttribute("placeholder","unesite asdasd" )