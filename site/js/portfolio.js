const changeAvatar = document.getElementById('avatarImg');

changeAvatar.addEventListener('click', function() {
    changeAvatar.src = 'image/avatar.svg';
});

const changeNameColor = document.querySelector('.description');
const button = document.createElement('button');
button.textContent = 'Modify text and color';
button.style.color = 'white';
button.style.backgroundColor = '#FF9FCF';
button.style.border = '1px solid white';
button.style.padding = '1rem';
button.style.borderRadius = '0.5rem';
changeNameColor.appendChild(button);

button.addEventListener('click', function() {
    const firstName = document.getElementById('firstname');
    firstName.style.color = 'white';
    const newName = prompt('Enter yout name');
    firstName.textContent = newName
    const changeBackground = document.querySelectorAll('.pink-bg');
    button.style.backgroundColor = '#750ff7';
    changeBackground.forEach(element => {
        element.style.backgroundColor = '#750ff7';
    });
    const changeColorText = document.querySelectorAll('h4');
    changeColorText.forEach(element => {
        element.style.color = '#750ff7';
    });


})