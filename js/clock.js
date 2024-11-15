// Element ==================================================
const clock = document.querySelector("#clock");
// Element ==================================================



// DEFINE ==================================================

// DEFINE ==================================================



// Event Function ==================================================

// Event Function ==================================================



// Function ==================================================
function getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${min}:${sec}`;
}
// Function ==================================================



// Main ==================================================
getClock();

// 함수를 1000ms(1s)마다 호출
setInterval(getClock, 1000);
// Main ==================================================