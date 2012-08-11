describe("Round", function() {
  var round;

  beforeEach(function() {
    var foo = function() {
      var index = 0;
      this.nextCard = function() {
        return ["D2", "D3", "D4", "D5", "D6", "D7", "D8"][index++]
      };
    };
    round = new Round(new foo());
  });

  it("initial deal interleves cards", function() {
    expect(round.players[0]().cards()).toEqual(["D2", "D4"]);
    expect(round.players[1]().cards()).toEqual(["D3", "D5"]);
  });
});