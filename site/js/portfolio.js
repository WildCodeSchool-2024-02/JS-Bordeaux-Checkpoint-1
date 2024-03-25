const avatar = document.getElementsByClassName("avatar")[0];

avatar.addEventListener("click", swapAvatar);
function swapAvatar() {
avatar.src = "avatar.svg"; 
}

const button = document.createElement("button");
button.textContent = "Changer le nom";
const buttonContainer = document.getElementsByClassName("buttonContainer")[0];
buttonContainer.appendChild(button);

button.addEventListener("click", function() {
  resultName = prompt("Entre ton nom");

const name = document.getElementById("firstname")
if (resultName !== null)  {
    name.textContent = resultName;
    name.style.color = "white"
}
});





