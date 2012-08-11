describe("Hand", function() {
  var hand;

  beforeEach(function() {
    hand = new Hand();
  });

  describe("when adding a card", function() {
    it("adds if not already in the hand", function() {
      hand.addCard("C9");
      expect(hand.cards()).toContain("C9");
    });

    it("throws exception if card is invalid suit", function() {
      expect(function() { hand.addCard("B9"); }).toThrow();
    });

    it("throws exception if card is invalid number", function() {
      expect(function() { hand.addCard("D23"); }).toThrow();
    });
  });

  describe("when getting the score", function() {
    it("should display the value of the hand", function() {
      hand.addCard("C9");
      expect(hand.score()).toEqual(9);
    });

    it("should use ace high when the score is low", function() {
      hand.addCard("CA");
      expect(hand.score()).toEqual(11);
    });

    it("should use ace low when the score is high", function() {
      hand.addCard("C9");
      hand.addCard("D2");
      hand.addCard("CA");
      expect(hand.score()).toEqual(12)
    });
  });
});