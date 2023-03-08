const mathEnforcer = require('../Unit Testing and Error Handling - Exercise/04. mathEnforcer');
const { expect } = require('chai');

describe('math enforcer object unit tests', () => {
    describe('addFive method', () => {
        it('Should return undefined if the parameter is a string', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });

        it('Should return undefined if the parameter is an array', () => {
            expect(mathEnforcer.addFive([])).to.equal(undefined);
        });

        it('Should return undefined if the parameter is an object', () => {
            expect(mathEnforcer.addFive({})).to.equal(undefined);
        });

        it('Should return undefined if the parameter is undefined', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
        });

        it('Should return undefined if the parameter is null', () => {
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
        });

        it('Should return the number + 5 if a number is passed', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it('Should return the number + 5 if a negative number is passed', () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        });

        it('Should return the number + 5 if a floating- point number is passed', () => {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        });
    });

    describe('subtractTen method', () => {
        it('Should return undefined if the parameter is a string', () => {
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
        });

        it('Should return undefined if the parameter is an array', () => {
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
        });

        it('Should return undefined if the parameter is an object', () => {
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
        });

        it('Should return undefined if the parameter is undefined', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
        });

        it('Should return undefined if the parameter is null', () => {
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
        });

        it('Should return the number - 10 if a number is passed', () => {
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
        });

        it('Should return the number - 10 if a negative number is passed', () => {
            expect(mathEnforcer.subtractTen(-30)).to.equal(-40);
        });

        it('Should return the number -10 if a floating- point number is passed', () => {
            expect(mathEnforcer.subtractTen(20.5)).to.equal(10.5)
        });
    });

    describe('sum method', () => {
        it('Should return undefined if the first parameter is not a number', () => {
            expect(mathEnforcer.sum('10', 10)).to.equal(undefined);
        });

        it('Should return undefined if the second parameter is not a number', () => {
            expect(mathEnforcer.sum(10, '10')).to.equal(undefined);
        });


        it('Should return the sum of the numbers', () => {
            expect(mathEnforcer.sum(10, 10)).to.equal(20);
        });

        it('Should return the sum if negative numbers are passed', () => {
            expect(mathEnforcer.sum(-30, -40)).to.equal(-70);
        });

        it('Should return the sum if floating-point numbers are passed', () => {
            expect(mathEnforcer.sum(10.5, 10.5)).to.equal(21)
        });
    });
});

