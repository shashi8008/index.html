var randomNumber1 = Math.floor(Math.random() * 6)+1;//1-6 numbers
var randomDiceImage = "dice" + randomNumber1 +".png";//dice1-dice6
var randomImageSorce = "images/" + randomDiceImage;//image/dice1.png - image/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSorce);
//image 2
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSorce2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSorce2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🎊 Player 1 wins";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " 🎊 Player 2 wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
