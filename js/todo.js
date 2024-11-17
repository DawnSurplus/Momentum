// Element ==================================================
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list")
// Element ==================================================



// DEFINE, Variables ==================================================
const TODOS_KEY = "todos";
let toDos = [];
// DEFINE, Variables ==================================================



// Event Function ==================================================
function handleTodoSubmit(event){
    // 새로고침 막음
    event.preventDefault();

    const newTodo = todoInput.value;
    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    }

    toDos.push(newTodoObj);

    paintTodo(newTodoObj);
    saveTodos();

    todoInput.value = "";
}
todoForm.addEventListener("submit", handleTodoSubmit);

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();    

    // id가 다른 것만 남김
    // li.id는 String
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));

    // 남아있는 todo list 저장
    saveTodos();
}
// Event Function ==================================================



// Function ==================================================
function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    
    // todo list 내용 추가
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

    // del 버튼 추가
    const delBtn = document.createElement("button");
    delBtn.className = "delBtn";
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(delBtn);
    li.className="todo-list";

    todoList.appendChild(li);
}

function saveTodos(){
    // localStorage에 저장될 때 String으로 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// Function ==================================================



// Main ==================================================i
const savedtoDos = localStorage.getItem(TODOS_KEY);

if(savedtoDos != null){
    // String을 array로 변경
    toDos =  JSON.parse(savedtoDos);

    // forEach() : 각 item들에 대해 함수를 실행
    toDos.forEach(paintTodo);
}
// Main ==================================================