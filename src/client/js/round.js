function Round(currentGameObj) {
  var self = this;
  var currentGame = currentGameObj;

  this.player = ko.observable(new Hand());
  this.dealer = ko.observable(new Hand());
  this.players = [this.player, this.dealer];

  this.currentPlayer = {};
  this.hit = function() {
    self.currentPlayer.addCard(currentGame.nextCard());
    return (self.currentPlayer.score() < 22);
  };

  this.stand = function() {
    self.currentPlayer = self.players[self.players.indexOf(self.currentPlayer)++]();
  };

  for (var i = 0; i < this.players.length * 2; i++) {
    this.players[i % 2]().addCard(currentGame.nextCard());
  }

  this.currentPlayer = this.players[0]();
}