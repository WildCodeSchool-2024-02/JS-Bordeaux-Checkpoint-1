const imgAvatar = document.querySelector('.avatar');
imgAvatar.addEventListener('click', function (){
    imgAvatar.src = "./image/avatar-bis.png";
    imgAvatar.alt = "Avatar bis";
});

const firstName = document.querySelector('#firstname');
firstName.addEventListener('click', function (){
    let changedName = prompt("What's your name?");
    firstName.innerHTML = firstName.innerHTML.replace('Matt', `${changedName}`);
    changedName = firstName.style.color = 'white'; 
});