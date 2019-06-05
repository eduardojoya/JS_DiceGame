var randomNumber1 = Math.random() * 6 //generates a random number from 1-5
randomNumber1 = Math.floor(randomNumber1) + 1; //rounds the randon number and adds 1
//var randomNumber 1 = Math.floor(Math.random() * 6) +  1;
var randomDiceNumberLeft = "images/dice" + randomNumber1 + ".png"

document.querySelector(".img1").setAttribute("src", randomDiceNumberLeft)

//Do the same for Dice 2
var randomNumber2 = Math.random() * 6
randomNumber2 = Math.floor(randomNumber2) + 1;
//var randomNumber 2 = Math.floor(Math.random() * 6) +  1;
var randomDiceNumberRight = "images/dice" + randomNumber2 + ".png"

document.querySelector(".img2").setAttribute("src", randomDiceNumberRight)

//If-Else statement
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "There is no victor! "
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "💪🏾 Tribute 1 prevails!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Tribute 2 triumphs! 👊🏾"
};