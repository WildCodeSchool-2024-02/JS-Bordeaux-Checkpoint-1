const avatar = document.querySelector(".avatar")

avatar.addEventListener('click', function () {
    avatar.src = "./image/avatar.svg";
  });


const button = document.querySelector(".button")

button.addEventListener("click", function() {
    const newName = prompt("What's your firstname ?");
        if (newName !== null) {
            document.getElementById("firstname").textContent = newName;
            document.getElementById("firstname").style.color = "white";
        }

    const newColor = prompt("Enter a new background color");
        if (newColor !== null) {
            document.querySelector(".pink-bg").style.backgroundColor = newColor;
            document.querySelector(".pink-text").style.color = newColor;
        }
});

