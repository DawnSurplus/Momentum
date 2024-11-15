const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");




function onLoginBtnClick(){
    console.log(loginInput.value);
    console.log("Clicked!!");
}
loginButton.addEventListener("click", onLoginBtnClick);