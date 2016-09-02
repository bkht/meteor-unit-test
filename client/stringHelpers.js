// meteor test --driver-package practicalmeteor:mocha --port 4000

// schrijf een code dat een input string kan opdelen in een individuele character
// 'helloworld' ==> 'h e l l o w o r l d'

'use strict';

export function splitString(string) {
    var length = string.length;
    var string2 = '';
    for (var i = 0; i < length; i++) {
        string2 += string[i] + ' ';
    }
    return string2.trim();
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
