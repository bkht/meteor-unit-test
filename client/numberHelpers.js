'use strict';

export function createRandomNumbersArray(min, max, length) {
    console.log(`createRandomArray(${min}, ${max}, ${length})`);
    var numberArray = [];
    for (var i = 0; i < length; i++) {
        var value = Math.floor(Math.random() * (max - min)) + min;
        numberArray.push(value);
        console.log(`value: ${value}`);
    }
    // Sort number array in descending order;
    numberArray.sort( (a, b) => {
        return b - a;   // b - a = DESC, a - b = ASC
    });
    console.log(numberArray);
    return numberArray;
}
