const lookupChar = require('../Unit Testing and Error Handling - Exercise/03. charLookup');
const { expect } = require('chai');

describe('tests for lookupChar function', () => {

    it('Should return the expected result', () => {
        expect(lookupChar('Hi', 1)).to.equal('i');
    });

    it('Should return undefined if the first parameter is not a string', () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
    });

    it('Should return undefined if the second parameter is not a number', () => {
        expect(lookupChar('Hi', 10.5)).to.equal(undefined);
    });

    it('Should return Incorrect index if the string length is smaller than the index', () => {
        expect(lookupChar('Hey', 10)).to.equal('Incorrect index');
    });

    it('Should return Incorrect index if the index is a negative number', () => {
        expect(lookupChar('Hello', -50)).to.equal('Incorrect index');
    });
});