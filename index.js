
var randomNumber1 = Math.floor(Math.random() * 6) + 1
var randomNumber2 = Math.floor(Math.random() * 6) + 1
var image1 = "dice" + randomNumber1 + ".png"
var image2 = "dice" + randomNumber2 + ".png"

var image1src = "images/" + image1;
var image2src = "images/" + image2;

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src",image1src)
img2.setAttribute("src",image2src)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}
if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}
if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw"
}



