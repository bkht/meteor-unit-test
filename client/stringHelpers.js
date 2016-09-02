// meteor test --driver-package practicalmeteor:mocha --port 4000

// schrijf een code dat een input string kan opdelen in een individuele character
// 'helloworld' ==> 'h e l l o w o r l d'

'use strict';

export function splitString(string) {
    console.log(string);
    var length = string.length;
    var string2 = '';
    for (var i = 0; i < length; i++) {
        string2 += string[i] + ' ';
    }
    console.log(string2);
    return string2.trim();
}

export function alternateString(string) {
    console.log(string);
    var length = string.length;
    var string2 = '';
    for (var i = 0; i < length; i++) {
        if (!(i % 2)) {
            string2 += string[i].toUpperCase();
        }
        else {
            string2 += string[i].toLowerCase();
        }
    }
    console.log(string2);
    return string2;
}

export function partitionString(string, number = 2) {
    var strArray = [];
    var allArray = [];
    console.log(string);
    var length = string.length;
    var string2 = '';
    for (var i = 0; i < length; i++) {
        string2 += string[i];
        if ((string2.length==number) || (i == length-1)) {
            strArray.push(string2);
            allArray.push(strArray);
            strArray = [];
            string2= '';
        }

    }
    console.log(allArray);
    return allArray;
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
