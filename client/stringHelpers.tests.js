// meteor test --driver-package practicalmeteor:mocha --port 4000

import {capitalizeFirstLetter, splitString, alternateString, partitionString} from './stringHelpers';

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
    it("it should partition the string into ['h']", () => {
        expect(partitionString('h')).to.eql(['h']);
    });
    it("partitionString('helloworld') should convert into [['he'], ['ll'], ['ow'], ['or'], ['ld']]", () => {
        expect(partitionString('helloworld')).to.eql(['he', 'll', 'ow', 'or', 'ld']);
    });
    it("partitionString('helloworldJ') should convert into [['he'], ['ll'], ['ow'], ['or'], ['ld'], ['J']]", () => {
        expect(partitionString('helloworldJ')).to.eql(['he', 'll', 'ow', 'or', 'ld', 'J']);
    });
    it("partitionString('helloworld', 3) should convert into [['hel'], ['low'], ['orl'], ['d']]", () => {
        expect(partitionString('helloworld', 3)).to.eql(['hel', 'low', 'orl', 'd']);
    });
    it("partitionString('helloworld', 5) should convert into [['hello'], ['world']]", () => {
        expect(partitionString('helloworld', 5)).to.eql(['hello', 'world']);
    });
});
