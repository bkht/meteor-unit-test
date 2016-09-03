import {createRandomNumbersArray} from './numberHelpers';

describe('tests form numberHelpers', () => {
    it('randomArray(min=50, max=100, n=3) should convert into DESC Array [x, y, z]', () => {
        // expect(createRandomNumbersArray(50, 100, 3)).to.eql([['hello'], ['world']]);
        var myArray = createRandomNumbersArray(50, 100, 3);
        // var myArray = [82, 68, 56];
        var result1 = myArray[0];
        var result2 = myArray[1];
        var result3 = myArray[2];
        expect(result1).to.be.within(50,100);
        expect(myArray).to.have.lengthOf(3);
        expect(result1).to.be.at.least(result2);
        expect(result2).to.be.at.least(result3);
    });
});