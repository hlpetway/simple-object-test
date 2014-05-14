var expect = require('chai').expect,
    Main = require('./main');

describe('Card object tests', function() {
    var card;

    beforeEach(function() {
        card = new Main.Card('Heart', 'Ace');
    });

    describe('constructor', function() {

        it('card should be truthy (exists)', function() {
            expect(card).to.be.ok;
        });

        it('card should have a suit property', function() {
            expect(card).to.have.property('suit');
        });

        it('card should have a rank property', function() {
            expect(card).to.have.property('rank');
        });

        it('card suit property matches beforeEach', function() {
            expect(card.suit).to.equal('Heart');
        });

        it('card rank property matches beforeEach', function() {
            expect(card.rank).to.equal('Ace');
        });
    });

    describe('card should have frozen properties', function() {

        it('card should have frozen properties', function() {
            expect(Object.isFrozen(card) === true);
        });
    });

});