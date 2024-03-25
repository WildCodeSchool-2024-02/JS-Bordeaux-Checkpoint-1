const bannerImg = document.getElementById('bannerImg');

const changeBannerImg = () => {
    bannerImg.addEventListener('click', () => {
        if (bannerImg.src === "image/avatar-bis.png") {
            bannerImg.src = "image/avatar.svg";
        } else {
            bannerImg.src = "image/avatar-bis.png";
        }
    });
}

changeBannerImg();

const modifyName = document.getElementById('modifyName');
const firstName = document.getElementById('firstname');
const whiteColor = "#ffffff";
const bioBg = document.getElementById('bio');
const pinkBgClass = document.querySelectorAll('.pink-bg');
const pinkTextClass = document.querySelectorAll('.pink-text');
const aElements = document.getElementsByTagName('a');

const changeNameAndColor = () => {
    modifyName.addEventListener('click', () => {
        const newBgColor = prompt('Enter a new color');
        const newName = prompt('Enter your name');
        bioBg.style.backgroundColor = newBgColor;
        firstName.innerText = newName;
        for (let pinkBgElement of pinkBgClass) {
            pinkBgElement.style.backgroundColor = newBgColor;
        }
        for (let pinkTextElement of pinkTextClass) {
            pinkTextElement.style.color = newBgColor;
        }
        for (let a of aElements) {
            a.style.color = newBgColor;
        }
        firstName.style.color = whiteColor;
    });
}

changeNameAndColor();

const modifyToolButton = document.getElementById('changeDevTools');
const devToolItem = document.getElementsByClassName('front-dev-tool');
const myTools = ["GitHub", "VSCode", "Terminal"];

const modifyTool = () => {
    modifyToolButton.addEventListener('click', () => {
        let i = 0;
        for (let toolItem of devToolItem) {
            toolItem.innerText = myTools[i];
            i++;
        }
    });
}

modifyTool();