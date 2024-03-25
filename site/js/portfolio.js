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