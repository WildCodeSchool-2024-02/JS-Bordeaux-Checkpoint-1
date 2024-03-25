const getAvatar = document.getElementById('avatar');

getAvatar.addEventListener('click', function () {
    getAvatar.src="image/avatar-bis.png";
});

const namePortfolio = document.getElementById('firstname');
const description = document.getElementById('description');
const thirdTitle = document.querySelectorAll('h4');
const footer = document.querySelector('footer');

namePortfolio.addEventListener('click', function () {
    const newColor = prompt('Enter a color');
    const newName = prompt('Enter your name');
    namePortfolio.innerHTML = newName;
    namePortfolio.style.color = 'white';
    if (newColor === '#750ff7') {
        description.classList.remove('pink-bg');
        description.classList.add('purple-bg');
        thirdTitle.forEach(title => {
            title.classList.remove('pink-text');
            title.classList.add('purple-text');
        })
        footer.classList.remove('pink-bg');
        footer.classList.add('purple-bg');
    };
});