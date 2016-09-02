// meteor test --driver-package practicalmeteor:mocha --port 4000

import {capitalizeFirstLetter, splitString} from './stringHelpers';

describe('tests for stringHelpers', () => {
    it('should capitalize the first letter of an input string', () => {
        expect(capitalizeFirstLetter('jack')).to.equal('Jack');
    });
    it('should split the string into individual characters', () => {
        expect(splitString('jack')).to.equal('j a c k');
    });
});
