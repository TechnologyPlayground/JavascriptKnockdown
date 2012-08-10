function game () {
  var self = this;

  this.currentRound = {};
  this.deck = [];

  this.suits = ["D", "C", "H", "S"];
  this.numbers = ["J", "Q", "K", "A"];
  this.deckOfCards = [];

  // Clear current round and create a new deck
  this.shuffle = function() {
    self.currentRound = null;

    var safety = 0;

    for (var i = 0; i < 52; i++) {
      safety++;
      var selectedCard = "";
      do {
        var randomCardIndex = Math.floor(Math.random() * 51);
        var selectedCard = this.deckOfCards[randomCardIndex];
        if (self.deck.indexOf(selectedCard) == -1) {
          self.deck.push(selectedCard);
        }
        else {
          selectedCard = null;
        }
      } while (selectedCard != null && safety < 10);
    }
  };

  // Create the current round
  this.deal = function() {};

  //this.shuffle();
  for (var i = 2; i < 11; i++) {
    this.numbers.push(i);
  }

  for (var suitIndex = 0; suitIndex < 4; suitIndex++) {
    for (var numberIndex = 0; numberIndex < 13; numberIndex++) {
      self.deckOfCards.push(self.suits[suitIndex] + self.numbers[numberIndex]);
    }
  }
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