const imgAvatar = document.getElementById('imgAvatar');

const changeAvatar = () => {
    imgAvatar.addEventListener('click', () => {
        if (imgAvatar.src === "site/image/avatar-bis.png") {
            imgAvatar.src = "image/avatar.svg";
        } else {
            imgAvatar.src = "image/avatar.svg";
        }
    })
}

changeAvatar();

const buttonText = document.getElementById('buttonText');
const firstName = document.getElementById('firstname');
const bgColor = document.getElementsByClassName('pink-bg');

buttonText.addEventListener('click', () => {
    firstName.innerHTML = prompt('enter your text');
    firstName.style.color = '#FFFFFF';
    bgColor[0].style.backgroundColor = prompt('Color?');
})
