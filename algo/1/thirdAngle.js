/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  let someTotal = 180;
  let amountThirdAngle = someTotal - (a + b)

  if (a > 180 && b > 180 || a < 0 && b < 0) {
    console.log('impossible, veuillez choisir de bonnes mesures');
  } else {
    return amountThirdAngle
  }
}

module.exports = thirdAngle;
