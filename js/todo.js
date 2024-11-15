// Element ==================================================
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list")
// Element ==================================================



// DEFINE ==================================================

// DEFINE ==================================================



// Event Function ==================================================
function handleTodoSubmit(event){
    event.preventDefault();

    const newTodo = todoInput.value;
    paintTodo(newTodo);

    todoInput.value = "";
}
todoForm.addEventListener("submit", handleTodoSubmit);

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();    
}
// Event Function ==================================================



// Function ==================================================
function paintTodo(newTodo){
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.innerText = newTodo;

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(delBtn);

    todoList.appendChild(li);
}

// Function ==================================================



// Main ==================================================i

// Main ==================================================