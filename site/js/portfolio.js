/*PROFILE PICTURE CHANGE*/
let avatar = document.getElementById("avatarPic").addEventListener("click",changeAvatar);
function changeAvatar(){
    this.src="image/avatar-bis.png";
}

/*NAME CHANGE*/
let modifyName = document.getElementById("modifyNameColor").addEventListener("click",changeName);
let displayName = document.getElementById("firstname");

function changeName(){
    let customName = prompt("Enter your name:");
    displayName.textContent = customName;
    displayName.style.color = "white";
}

/*COLOR BACKGROUND CHANGE*/
let modifyColor = document.getElementById("modifyNameColor").addEventListener("click",changeColor);
let displayColor = document.getElementById("colorChange");
let link = document.getElementsByTagName("a"); //link color change
function changeColor(){
    let customColor = prompt("Enter a color:");
    displayColor.style.backgroundColor = customColor;
  //  link.forEach(element) => link.style.backgroundcolor = customColor; // link color change
}