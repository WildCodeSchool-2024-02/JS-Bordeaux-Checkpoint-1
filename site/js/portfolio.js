let avatar = document.getElementById("avatar-image");

avatar.addEventListener("click", function() {
    if(avatar.src.includes("image/avatar.svg")){
        avatar.src = "image/avatar-bis.png";
        avatar.alt = "avatar2";
    }else{
        avatar.src = "image/avatar.svg";
        avatar.alt = "avatar1";
    }
});


let myName = document.getElementById("firstname");
let changeColor = document.querySelector(".pink-bg");


let modifyButton = document.createElement('button');
modifyButton.textContent = "modify Text and Color";

modifyButton.addEventListener("click", function(){
    let newBgColor = prompt('Enter a color');

    if(newBgColor !== null){

        let descriptionSection = document.querySelectorAll('[class*="pink"]');
        descriptionSection.style.backgroundColor = newBgColor;
        descriptionSection.style.color = newBgColor;
    }


    let newName = prompt('Enter your name :');   
    if(newName !== null){
        myName.textContent = newName;
        myName.style.color = "white";
    }
});

let descriptionSection = document.querySelector('.description.pink-bg');

descriptionSection.appendChild(modifyButton);


