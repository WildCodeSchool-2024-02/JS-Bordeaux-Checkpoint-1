const getAvatar = document.getElementById('avatar');
const getName = document.getElementById('firstname');

getAvatar.addEventListener('click', function () {
    getAvatar.src="image/avatar-bis.png";
})

getName.addEventListener('click', function () {
    const newName = prompt("Enter your name");
    getName.innerHTML = newName;
    getName.style.color = "white";
})