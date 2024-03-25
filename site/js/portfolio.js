let avatarImg = document.querySelector(".avatar1");

avatarImg.onclick = function() {

  avatarImg.src = "image/avatarGirl.png";
  avatarImg.style.width = "150px";
  avatarImg.style.height = "150x";
};

let button = document.createElement("button");
button.textContent = "Enter your name and change text color";
button.onclick = changeName;

document.querySelector("article").appendChild(button);

function changeName(){
    let newName = prompt ("Enter your name : ");

    let firstName = document.getElementById("firstname");
    firstName.textContent = newName;
    firstName.style.color = "white";

}