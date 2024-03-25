const myImg = document.querySelector('.desktop-desc > img');

const currentImg = "./image/avatar-bis.png"
const nextImg = "./image/avatar.svg"

const eventImg = myImg.addEventListener('click', () => {
    myImg.src = nextImg
})

// function changeAvatr() {
//     if (eventImg) {
//     }
// }