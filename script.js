
/* local storage,cookies
our data in our computer local storage
because that information not delete eventhough laptop shut down
*/

//get All elements
let button = document.getElementById("add")
let todolist = document.getElementById("todoList")
let input = document.getElementById("input")

//push our value into the array when the click Add
let todos =[];

window.onload = ()=>{
   todos =JSON.parse(localStorage.getItem("item")) || []
   todos.forEach(todos=>addtodo(todos))
}
button.addEventListener("click",()=>{
todos.push(input.value)
localStorage.setItem("item",JSON.stringify(todos))
addtodo(input.value)
})

//displat, delete and overwide  
function addtodo(todo){
let para = document.createElement('p')
para.innerHTML = todo
console.log(para)
todolist.appendChild(para)
para.addEventListener("click",()=>{
    para.style.textDecoration = "line-through";
    input.value="";
    remove(todo)
})
para.addEventListener("dblclick",()=>{
    todolist.removeChild(para)
    input.value="";
    remove(todo)
})

}

function remove(todo){
let index = todos.indexOf(todo)
if(index>-1){
    todos.splice(index,1)
}
localStorage.setItem("item",JSON.stringify(todos))
}
