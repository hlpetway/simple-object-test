/*_when I create a card of a certain suit and rank and the card will hold this suit and rank.
We also want that the card being held will not change suit and rank.

Go through steps Red/Green/Refactor.
We want two files the class and the test.
Remember to lint your code. */

var Card = function(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

//Add Card Attrib Methods
Card.prototype.suit = '';
Card.prototype.rank = '';

//Show Card and Rank Methods
Card.prototype.showSuit = function(card) {
    return this.suit;
};
Card.prototype.showRank = function(card) {
    return this.rank;
};

//Add Cards

module.exports.Card = Card;

/* Test:
1.) When we create a card it holds a suit and a rank.
2.) When we hold a card it will not change suit and rank.

*/