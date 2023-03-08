const isOddOrEven = require('../Unit Testing and Error Handling - Exercise/02. evenOrOdd');
const { assert, expect } = require('chai');

describe('even or odd function tests', () => {
    it('should return undefined if the paramter is a number', () => {
        expect(isOddOrEven(10)).to.equal(undefined);
    });

    it('should return undefined if the paramter is an object', () => {
        expect(isOddOrEven({})).to.equal(undefined);
    });

    it('should return undefined if the paramter is an array', () => {
        expect(isOddOrEven([])).to.equal(undefined);
    });

    it('should return undefined if the paramter is undefined', () => {
        expect(isOddOrEven(undefined)).to.equal(undefined);
    });

    it('should return undefined if the paramter is null', () => {
        expect(isOddOrEven(null)).to.equal(undefined);
    });


    it('should make sure the function returns even when an even string length is passed', () => {
        expect(isOddOrEven('Hi')).to.equal('even');
    });

    it('should make sure the function returns odd when an odd string length is passed', () => {
        expect(isOddOrEven('Hello')).to.equal('odd');
    });

});