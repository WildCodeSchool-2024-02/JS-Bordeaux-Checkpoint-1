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

const changeNameAndColor = () => {
    modifyName.addEventListener('click', () => {
        const newName = prompt('Enter your name');
        firstName.innerText = newName;
        firstName.style.color = whiteColor;
    });
}

changeNameAndColor();