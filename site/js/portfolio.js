// Step 1 :
const myImg = document.querySelector('.desktop-desc > img');

const currentImg = "./image/avatar-bis.png"
const nextImg = "./image/avatar.svg"

const eventImg = myImg.addEventListener('click', () => {
    myImg.src = nextImg
})

// Déclaration des constantes
const descBackground = document.getElementsByClassName('description')[0];
const descParagraph = document.querySelector('.description:nth-child(1) > p');
const userName = document.getElementById("firstname");

const pinkText = document.querySelectorAll('.pink-text');
const pinkBg = document.querySelectorAll('.pink-bg');

const allA = document.querySelectorAll('a');

function createAnElement(tag, parent) {
    const element = document.createElement(tag);
    element.style.padding = "1rem";
    element.style.display = "flex";
    element.style.justifyContent = "center";
    element.style.alignContent = "center";
    parent.appendChild(element);
    return element;
}

function createAButton(tag, parent) {
    const element = document.createElement(tag);
    element.style.padding = "1rem";
    element.style.backgroundColor = "#750ff7";
    element.style.color = "white";
    parent.appendChild(element);
    return element
}

const descArticle = createAnElement('article', descParagraph);
const btnModification = createAButton('button', descArticle);
btnModification.innerText = "Modify Text and Color";

function colorState(){
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
        frontDevToolsButton.style.backgroundColor = newColor;
        newBtn.style.backgroundColor = newColor;
        btnModification.style.backgroundColor = newColor;
    
    
        userName.innerText = prompt('Enter your name');
        userName.style.color = "white"
    });
}

colorState();

// Step 6
const frontDevTools = document.getElementById('front-dev-tools');
const allLi = document.querySelectorAll('#front-dev-tools > li');

const frontDevToolsArticle = document.createElement('article');
frontDevToolsArticle.style.padding = "1rem";
frontDevToolsArticle.style.display = "flex";
frontDevToolsArticle.style.justifyContent = "center";
frontDevToolsArticle.style.alignContent = "center";
frontDevTools.appendChild(frontDevToolsArticle);

const frontDevToolsButton = document.createElement('button');
frontDevToolsButton.style.padding = "1rem";
frontDevToolsButton.style.backgroundColor = "#750ff7";
frontDevToolsButton.style.color = "white";

frontDevToolsButton.innerText = "Modify";

frontDevToolsArticle.appendChild(frontDevToolsButton);

function changeLi() {
    frontDevToolsButton.addEventListener('click', () => {
        allLi.forEach((e, index) => {
            if (index === 0) {
                e.innerText = "VSCode" 
            } else if (index === 1) {
                e.innerText = "GitHub"
            } else {
                e.innerText = "Terminal"
            }
        })
    })
}

changeLi();

// step 7
const liColumn = document.getElementsByClassName('column')[0];
const selectUlColum = document.querySelector('.column > ul');

const newArticle = document.createElement('article');
newArticle.classList.add('flexArticle');
newArticle.style.display = "flex";
newArticle.style.justifyContent = "center";
newArticle.style.gap = "0.5rem";
liColumn.appendChild(newArticle);

const newInput = document.createElement('input');
// newInput.addEventListener('change', () => {
//     const newLi = document.createElement('li');
//     newLi.innerText = newInput
// })
newArticle.appendChild(newInput);

const newBtn = document.createElement('button');
newBtn.innerText = "Add";
newBtn.style.background = "#750ff7";
newBtn.style.padding = "0.5rem";
newBtn.style.color = "white";
newArticle.appendChild(newBtn);


// newInput.addEventListener('change', () => {
//     if (newInput !== null && newBtn) {

//     } 
// })