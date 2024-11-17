// Element ==================================================

// Element ==================================================



// DEFINE ==================================================
const IMAGES_LIST = [
    //"galaxy.jpg",
    //"moon.jpg",
    //"sky_island.jpg",
    "cloud_ring.jpg",
]
// DEFINE ==================================================



// Main ==================================================
const chosenImage = IMAGES_LIST[Math.floor(Math.random()*IMAGES_LIST.length)];

// body 태그의 스타일을 수정하여 배경 이미지 적용
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundPosition = 'center center';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundAttachment = 'fixed';
// Main ==================================================