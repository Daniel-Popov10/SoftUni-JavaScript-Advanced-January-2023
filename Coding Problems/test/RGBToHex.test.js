const rgbToHexColor = require('../Unit Testing and Error Handling - Lab/06. rgbToHex');
const { expect } = require('chai');


describe('rgbToHexColor function', () => {
    it('should return undefined if first num is not in rage', () => {
        expect(rgbToHexColor(260, 235, 125)).to.equal(undefined);
    });

    it('should return undefined if second num is not in rage', () => {
        expect(rgbToHexColor(220, 270, 125)).to.equal(undefined);
    });

    it('should return undefined if third num is not in rage', () => {
        expect(rgbToHexColor(220, 210, 300)).to.equal(undefined);
    });

    it('should return undefined if first arg is not a num', () => {
        expect(rgbToHexColor('string', 235, 125)).to.equal(undefined);
    });

    it('should return undefined if second arg is not a num', () => {
        expect(rgbToHexColor(230, '235', 125)).to.equal(undefined);
    });

    it('should return undefined if third arg is not a num', () => {
        expect(rgbToHexColor(230, 230, '125')).to.equal(undefined);
    });

    it('should return undefined if first arg is negative', () => {
        expect(rgbToHexColor(-230, 230, 125)).to.equal(undefined);
    });

    it('should return undefined if second arg is negative', () => {
        expect(rgbToHexColor(230, -230, 125)).to.equal(undefined);
    });

    it('should return undefined if third arg is negative', () => {
        expect(rgbToHexColor(230, 230, -125)).to.equal(undefined);
    });

    it('should return undefined if no args are passed', () => {
        expect(rgbToHexColor()).to.equal(undefined);
    });

    it('should return correct color', () => {
        expect(rgbToHexColor(230, 230, 125)).to.equal('#E6E67D');
    });

    it('should pad with 0', () => {
        expect(rgbToHexColor(12, 13, 13)).to.equal('#0C0D0D');
    });

    it('should work with 0', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('should start with #', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('highest possible value test', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
});