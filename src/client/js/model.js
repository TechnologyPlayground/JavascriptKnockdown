function game () {
  this.currentRound = {};
  this.deck = ["DA", "C10"];

  // Clear current round and create a new deck
  this.shuffle = function() {};

  // Create the current round
  this.deal = function() {};

  this.shuffle();
}

function round(currentDeck) {
  this.player = {};
  this.dealer = {};
  this.currentPlayer = {};
  this.hit = function() {};
  this.stand = function() {};
}

function hand() {

  this.hit = function() {};
  this.stand = function() {};
  this.score = {};
}