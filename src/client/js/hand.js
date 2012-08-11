function Hand() {
  var self = this;
  this.cards = ko.observableArray();
  this.score = ko.computed(function() {
    var initialScore = 0;
    for (var cardIndex in self.cards()) {
      if (self.cards()[cardIndex].indexOf("A") == -1) {
        initialScore += self.getValue(self.cards()[cardIndex], initialScore);
      }
    }
    for (var cardIndex in self.cards()) {
      if (self.cards()[cardIndex].indexOf("A") != -1) {
        initialScore += self.getValue(self.cards()[cardIndex], initialScore);
      }
    }
    return initialScore;
  });

  this.addCard = function(card) {
    if (!(new Deck()).isValidCard(card)) throw("Invalid card");
    this.cards.push(card);
  };

  this.getValue = function(card, score) {
    var cardValue = card.substring(1);
    var numericValue = parseInt(cardValue, 10);
    if (!isNaN(numericValue)) {
      return numericValue;
    }
    else if (cardValue == "A") {
      return (score > 10) ? 1 : 11;
    }
    else {
      return 10;
    }
  };
}