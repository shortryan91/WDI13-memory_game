

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
  cardsInPlay.push("queen");
var cardTwo = cards[3];
  cardsInPlay.push("king");

if (cardsInPlay.length === 2) {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
  } else if (cardsInPlay[0] !== cardsInPlay[1]) {
    alert("Sorry try again")
  }

}




console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);
