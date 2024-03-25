const avatar = document.getElementById("main-avatar");
avatar.addEventListener("click", () => {
    avatar.src = "image/avatar.svg";
});

const sectionPresentation = document.getElementById("section-presentation");
const firstName = document.getElementById("firstname");
const pinkText = document.querySelectorAll('.pink-text');
const pinkBg = document.querySelectorAll('.pink-bg');
const links = document.querySelectorAll("a");
const buttonPresentation = document.createElement("button");
buttonPresentation.innerText = "Modify text and color";
buttonPresentation.style.color = "white";
buttonPresentation.style.backgroundColor = "#f5bdd5";
buttonPresentation.style.border = "solid 2px white";
buttonPresentation.style.padding = "1rem";
sectionPresentation.appendChild(buttonPresentation);

buttonPresentation.addEventListener("click", () => {
    sectionPresentation.style.backgroundColor = prompt ("Enter a color :");
    firstName.innerText = prompt("Enter your name :");
    buttonPresentation.style.backgroundColor = "#750ff7";
    firstName.style.color = "white";
    pinkText.forEach(item => item.classList.toggle("purple-text"));
    pinkBg.forEach(item => item.style.backgroundColor = "#750ff7");
    links.forEach(item => item.style.color = "#750ff7");
})

const frontDevToolsFront = document.getElementById("front-dev-tools-front");
const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");
const buttonModify = document.createElement("button");
buttonModify.innerText = "Modify text and color";
buttonModify.style.color = "white";
buttonModify.style.backgroundColor = "#750ff7";
buttonModify.style.border = "0";
buttonModify.style.padding = ".5rem";
buttonModify.style.marginTop = "1rem";
frontDevToolsFront.appendChild(buttonModify);

buttonModify.addEventListener("click", () => {
    firstLi.innerText = "VSCode";
    secondLi.innerText = "Github";
    thirdLi.innerText = "Terminal";
})

const frontDevToolsBack = document.getElementById("front-dev-tools-back");
const liBackEnd = document.getElementById("li-backend");
const input = document.createElement("input");
const submit = document.createElement("button");
input.placeholder = "Add your dev tools";
input.style.marginTop ="1rem";
input.style.paddingTop =".5rem";
input.style.paddingBottom =".5rem";
submit.type = "button";
submit.innerText = "Add";
submit.style.color = "white";
submit.style.backgroundColor = "#750ff7";
submit.style.border = "0";
submit.style.padding = ".5rem";
submit.style.marginLeft = ".5rem";
frontDevToolsBack.appendChild(input);
frontDevToolsBack.appendChild(submit);

submit.addEventListener("click", () => {
    const newLi = document.createElement("li");
    newLi.innerText = input.value;
    liBackEnd.appendChild(newLi);
})


