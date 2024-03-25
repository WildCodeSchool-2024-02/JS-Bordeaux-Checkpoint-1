// Step 1 :
const myImg = document.querySelector('.desktop-desc > img');

const currentImg = "./image/avatar-bis.png"
const nextImg = "./image/avatar.svg"

const eventImg = myImg.addEventListener('click', () => {
    myImg.src = nextImg
})

// Step 2 :
const descBackground = document.getElementsByClassName('description')[0];
const descParagraph = document.querySelector('.description:nth-child(1) > p');
const userName = document.getElementById("firstname");

const pinkText = document.querySelectorAll('.pink-text');
const pinkBg = document.querySelectorAll('.pink-bg');

const allA = document.querySelectorAll('a');

const descArticle = document.createElement('article');
descArticle.style.padding = "1rem";
descArticle.style.display = "flex";
descArticle.style.justifyContent = "center";
descArticle.style.alignContent = "center";
descParagraph.appendChild(descArticle);

const btnModification = document.createElement('p');
btnModification.style.padding = "1rem";
btnModification.style.border = "1px solid white";

btnModification.innerText = "Modify Text and Color";

descArticle.appendChild(btnModification);

// Step 3 :
btnModification.addEventListener('click', () => {
    const newColor = prompt('Enter a color : ');
    pinkText.forEach((e) => {
        e.style.color = newColor;
    })
    pinkBg.forEach((e) => {
        e.style.backgroundColor = newColor;
    })
    allA.forEach((e) => {
        e.style.color = newColor;
    })

    userName.innerText = prompt('Enter your name');
    userName.style.color = "white"
})

// Step 5 :
