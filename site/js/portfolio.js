const imgAvatar = document.querySelector('.avatar');
imgAvatar.addEventListener('click', function (){
    imgAvatar.src = "./image/avatar-bis.png";
    imgAvatar.alt = "Avatar bis";
});

const sectionPinkBG = document.querySelector('.pink-bg')
const button = document.querySelector('.button')
const firstName = document.querySelector('#firstname');
button.addEventListener('click', function (){
    let changedName = prompt("What's your name?");
    firstName.innerHTML = firstName.innerHTML.replace('Matt', `${changedName}`);
    changedName = firstName.style.color = 'white'; 
    let changedBackground = prompt("What color do you want?");
    sectionPinkBG = sectionPinkBG.style.background = changedBackground;

});