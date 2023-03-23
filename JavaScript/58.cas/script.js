let button = document.getElementsByClassName("button")[0];
let container = document.getElementById("toDoContainer");
let input = document.getElementById("input");

button.addEventListener("click", function () {
  let text = document.createElement("li");
  text.textContent = input.value;
  input.value = "";
  text.className = "lista";
  let deleteButton = document.createElement("button");
  deleteButton.className = "deletebtn";
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  text.appendChild(deleteButton);
  container.appendChild(text);
  deleteButton.addEventListener("click", brisi);
  function brisi() {
    deleteButton.parentElement.remove();
  }
  text.addEventListener("dblclick", zavrseno);
  let arrZavrseni;
  function zavrseno() {
    arrZavrseni = deleteButton.parentElement;
    deleteButton.parentElement.style.textDecoration = "line-through";
    return arrZavrseni;
  }
});
let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

const  select = document.querySelector(".options")
console.log(select)
const options = select.children
console.log(options)
Array.from(options).forEach((option)=> console.log(option.value))
