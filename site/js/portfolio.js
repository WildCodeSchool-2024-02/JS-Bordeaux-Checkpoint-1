let imgAvatar= document.querySelector (".avatar");
imgAvatar.addEventListener ("click", function() {
    if (imgAvatar.src= "./image/avatar.svg") {
        imgAvatar.src= "./image/avatar-bis.png";
    }
});


let firstName= document.getElementById("firstname");
firstName.addEventListener ("click", () =>{
    firstName.innerText= prompt("enter your name");
    firstName.style.color= "white";
});
// (tried to create a button)
// 
// let button= document.createElement ("button");
// button.innerText= "modify text and color";
// button.style.marginBottom= "2rem";
// description.appendChild(button);

let button= document.createElement ("button");
let description= document.querySelector (".description pink-bg");
description.appendChild(button);