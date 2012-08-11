describe("Deck", function() {
  var deck;

  beforeEach(function() {
    deck = new Deck();
  });

  describe("check for valid card", function() {
    it("should return true if the card is valid", function() {
      expect(deck.isValidCard("C4")).toBeTruthy();
    });

    it("should return false if the card is not valid", function() {
      expect(deck.isValidCard("B4")).toBeFalsy();
    });
  });

  describe("get shuffled cards", function() {
    it("should get one deck if the count isn't specified", function() {
      var cards = deck.getShuffledCards();
      expect(cards.length).toEqual(52);
    });

    it("should get one deck is count is invalid", function() {
      var cards = deck.getShuffledCards("foo");
      expect(cards.length).toEqual(52);
    });

    it("should contain all 52 cards", function() {
      var cards = deck.getShuffledCards(1);

      for (var suitIndex = 0; suitIndex < 4; suitIndex++) {
        for (var numberIndex = 0; numberIndex < 13; numberIndex++) {
          expect(cards).toContain(deck.suits[suitIndex] + deck.numbers[numberIndex]);
        }
      }
    });

    it("should contain 104 cards with two decks", function() {
      var cards = deck.getShuffledCards(2);
      expect(cards.length).toEqual(104);
    });
  });
});