function game () {
  var self = this;
  var deck = new Deck();

  this.currentRound = ko.observable();
  this.cards = [];
  this.currentCard = 0;

  // Clear current round and create a new cards
  this.shuffle = function() {
    self.currentRound(null);
    self.cards = deck.getShuffledCards();
  };

  // Create the current round
  this.deal = function() {
    self.currentRound(new round(self));
  };

  this.nextCard = function() {
    if (self.currentCard > 51) {
      return null;
    }

    return self.cards[self.currentCard++];
  };

  this.shuffle();
}

function round(currentGameObj) {
  var self = this;
  this.currentGame = currentGameObj;

  this.player = ko.observable(new Hand());
  this.dealer = ko.observable(new Hand());
  this.players = [this.player, this.dealer];

  this.currentPlayer = {};
  this.hit = function() {
    self.currentPlayer.addCard(self.currentGame.nextCard());
    return (self.currentPlayer.score() < 22);
  };

  this.stand = function() {
    self.currentPlayer = self.players[self.players.indexOf(self.currentPlayer)++]();
  };

  for (var i = 0; i < this.players.length * 2; i++) {
    this.players[i % 2]().addCard(self.currentGame.nextCard());
  }

  this.currentPlayer = this.players[0]();
}

