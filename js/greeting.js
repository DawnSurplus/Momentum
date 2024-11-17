// Element ==================================================
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

const greeting = document.querySelector("#greeting");
// Element ==================================================



// DEFINE ==================================================
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName"
// DEFINE ==================================================



// Event Function ==================================================
// submit Event
function onLoginSubmit(event){
    // JavaScript는 기본적으로 argument(ex. submit주체, submit 시점, ...)를 담아서 함수를 호출    
    // form을 submit하면 브라우저는 페이지를 새로고침 (기본동작)
    // preventDefault() : 브라우저의 기본 동작을 막음 ('첫 번째 argument' 안에 있는 함수)
    // 모든 event 함수들의 첫 arument는 지금 막벌어진 event들에 대한 정보를 가지고 있음
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const userName = loginInput.value;
    localStorage.setItem("userName", userName);
    paintGreeting(userName);
}
// Event Function ==================================================



// Function ==================================================
// Greeting 문구 표시
function paintGreeting(userName){
    greeting.innerText = `Have a Nice Day!!\n- ${userName} -`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
// Function ==================================================



// Main ==================================================
const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName == null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreeting(savedUserName);
}
// Main ==================================================