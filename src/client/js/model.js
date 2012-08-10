function game () {
  var self = this;

  this.currentRound = {};
  this.deck = [];
  this.currentCard = 0;

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
  this.deal = function() {
    self.currentRound = new round(self);
  };

  this.nextCard = function() {
    if (self.currentCard > 51) {
      return null;
    }

    return self.deck[self.currentCard++];
  };

  for (var i = 2; i < 11; i++) {
    this.numbers.push(i);
  }

  for (var suitIndex = 0; suitIndex < 4; suitIndex++) {
    for (var numberIndex = 0; numberIndex < 13; numberIndex++) {
      self.deckOfCards.push(self.suits[suitIndex] + self.numbers[numberIndex]);
    }
  }
  this.shuffle();
}

function round(currentGameObj) {
  var self = this;
  this.currentGame = currentGameObj;

  this.player = new hand();
  this.dealer = new hand();

  this.players = [this.player, this.dealer];

  this.currentPlayer = {};
  this.hit = function() {};
  this.stand = function() {};

  for (var i = 0; i < this.players.length * 2; i++) {
    this.players[i % 2].addCard(self.currentGame.nextCard());
  }
}

function hand() {
  this.cards = [];
  this.score = {};
  this.addCard = function(card) {
    this.cards.push(card);
  };
}