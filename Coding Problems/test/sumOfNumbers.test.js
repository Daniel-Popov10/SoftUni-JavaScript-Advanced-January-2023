
const sum = require('../Unit Testing and Error Handling - Lab/04. sumOfNumbers');
const { assert, expect } = require('chai');

describe('sum-function', () => {
    it('Should return the sum of all the elements inside the array', () => {
        let expectedResult = 20;
        let test = sum([5, 5, 5, 5]);
        expect(expectedResult).to.equal(test);
    });

    it('Should return the correctSum', () => {
        expect(sum([5, 5, 5])).to.not.equal(20)
    });

    it('Should throw error if func does not receive arr', () => {
        expect(() => sum(2)).to.throw(TypeError)
    });


});