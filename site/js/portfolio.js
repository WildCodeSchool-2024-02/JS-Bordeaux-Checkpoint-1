const avatar = document.querySelector(".avatar");
const buttonModify = document.querySelector(".modifyTextColor");

function avatarChange() {
    avatar.src = "image/avatar.svg";
}

avatar.addEventListener("click", avatarChange);

function modifyText() {
    let firstname = document.getElementById("firstname");

    let bgColor = document.querySelector(".pink-bg");

    let bgColor2 = document.querySelector(".pink-bg2");

    let bgButton = document.querySelector(".modifyTextColor");

    let colorText = document.querySelectorAll(".pink-text");

    let newbgColor = prompt("entrez une nouvelle couleur de fond :");

    if (newbgColor === "#750ff7") {
        let newText = prompt("Entrez votre nouveau nom : ");
        firstname.innerText = newText;
        firstname.style.color = "white";
        bgColor.style.backgroundColor = newbgColor;
        bgColor2.style.backgroundColor = newbgColor;
        bgButton.style.backgroundColor = newbgColor;
        colorText.style.color = newbgColor;

    } else {
        alert("enter this color : #750ff7");
    }
}

buttonModify.addEventListener("click", modifyText);