// Element ==================================================
// createElement() : element 추가
const bgImage = document.createElement("img");
// Element ==================================================



// DEFINE ==================================================
const IMAGES_LIST = [
    "galaxy.jpg",
    "moon.jpg",
    "sky_island.jpg"
]
// DEFINE ==================================================



// Main ==================================================
const chosenImage = IMAGES_LIST[Math.floor(Math.random()*IMAGES_LIST.length)];

bgImage.src = `img/${chosenImage}`
document.body.appendChild(bgImage);
// Main ==================================================