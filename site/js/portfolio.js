//changement d'image
const oldAvatar = document.querySelector('.avatar1');
oldAvatar.src = "site/image/avatar nouveau.jfif";
//creation d'un bouton pour chgt couleur et texte
const userName = prompt( "Enter your name?");
const oldName = document.getElementById('firstname');
oldName.innerHTML = `${userName}`;

const button = document.createElement("BUTTON");        
const buttonText = document.createTextNode("modify text and color");       
button.appendChild(buttonText);                                
document.body.appendChild(button);  


  // changement de couleur du fond rose par #750ff7

