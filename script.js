var playerOne = Math.floor(6 * Math.random() + 1);
var playerTwo = Math.floor(6 * Math.random() + 1);

if (playerOne > playerTwo) {
  document.querySelector("h1").innerText = "Player One Won 🚩";
} else if (playerOne < playerTwo) {
  document.querySelector("h1").innerText = "Player Two Won 🚩";
} else {
  document.querySelector("h1").innerText = "Match Draw 🚩";
}
if (playerOne === 1) {
  document.querySelector("#dice1 img").setAttribute("src", "images/dice5.png");
} else if (playerOne === 2) {
  document.querySelector("#dice1 img").setAttribute("src", "images/dice2.png");
} else if (playerOne === 3) {
  document.querySelector("#dice1 img").setAttribute("src", "images/dice3.png");
} else if (playerOne === 4) {
  document.querySelector("#dice1 img").setAttribute("src", "images/dice4.png");
} else if (playerOne === 5) {
  document.querySelector("#dice1 img").setAttribute("src", "images/dice5.png");
} else if (playerOne === 6) {
  document.querySelector("#dice1 img").setAttribute("src", "images/dice6.png");
}

if (playerTwo === 1) {
  document.querySelector("#dice2 img").setAttribute("src", "images/dice5.png");
} else if (playerTwo === 2) {
  document.querySelector("#dice2 img").setAttribute("src", "images/dice2.png");
} else if (playerTwo === 3) {
  document.querySelector("#dice2 img").setAttribute("src", "images/dice3.png");
} else if (playerTwo === 4) {
  document.querySelector("#dice2 img").setAttribute("src", "images/dice4.png");
} else if (playerTwo === 5) {
  document.querySelector("#dice2 img").setAttribute("src", "images/dice5.png");
} else if (playerTwo === 6) {
  document.querySelector("#dice2 img").setAttribute("src", "images/dice6.png");
}
