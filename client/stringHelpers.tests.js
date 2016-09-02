// meteor test --driver-package practicalmeteor:mocha --port 4000

import {capitalizeFirstLetter, splitString, alternateString, partitionString} from './stringHelpers';
import {createRandomNumbersArray} from './numberHelpers';

describe('tests for stringHelpers', () => {
    it('should capitalize the first letter of an input string', () => {
        expect(capitalizeFirstLetter('jack')).to.equal('Jack');
    });
    it('should split the string into individual characters', () => {
        expect(splitString('jack')).to.equal('j a c k');
    });
    it('should alternate lowercase and uppercase characters', () => {
        expect(alternateString('jack')).to.equal('JaCk');
    });
    it('h should partition the string into [[\'he\']]', () => {
        expect(partitionString('h')).to.eql([['h']]);
    });
    it('partitionString(\'helloworld\') should convert into [[\'he\'], [\'ll\'], [\'ow\'], [\'or\'], [\'ld\']]', () => {
        expect(partitionString('helloworld')).to.eql([['he'], ['ll'], ['ow'], ['or'], ['ld']]);
    });
    it('partitionString(\'helloworldJ\') should convert into [[\'he\'], [\'ll\'], [\'ow\'], [\'or\'], [\'ld\'], [\'J\']]', () => {
        expect(partitionString('helloworldJ')).to.eql([['he'], ['ll'], ['ow'], ['or'], ['ld'], ['J']]);
    });
    it('partitionString(\'helloworld\', 3) should convert into [[\'hel\'], [\'low\'], [\'orl\'], [\'d\']]', () => {
        expect(partitionString('helloworld', 3)).to.eql([['hel'], ['low'], ['orl'], ['d']]);
    });
    it('partitionString(\'helloworld\', 5) should convert into [[\'hello\'], [\'world\']]', () => {
        expect(partitionString('helloworld', 5)).to.eql([['hello'], ['world']]);
    });
    it('randomArray(min=50, max=100, n=3) should convert into DESC Array', () => {
        // expect(createRandomNumbersArray(50, 100, 3)).to.eql([['hello'], ['world']]);
        var myArray = createRandomNumbersArray(50, 100, 3);
        // var myArray = [56, 68, 82];
        var result1 = myArray[0];
        var result2 = myArray[1];
        var result3 = myArray[2];
        expect(result1).to.be.within(50,100);
        expect(myArray).to.have.lengthOf(3);
        expect(result2).to.be.at.least(result1);
        expect(result3).to.be.at.least(result2);
    });
});
