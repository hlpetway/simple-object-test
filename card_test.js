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

        it('post title property matches beforeEach', function() {
            expect(card.suit).to.equal('Heart');
        });

    });

});

//how to connect this to our main.js doc? 
//Is this why the error is Card variable not found?