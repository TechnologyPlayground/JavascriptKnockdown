function Game () {
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
    self.currentRound(new Round(self));
  };

  this.nextCard = function() {
    if (self.currentCard > 51) {
      return null;
    }

    return self.cards[self.currentCard++];
  };

  this.shuffle();
}