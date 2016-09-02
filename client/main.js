import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { splitString, alternateString, partitionString } from './stringHelpers';
import { createRandomNumbersArray } from './numberHelpers'

import './main.html';

Template.split.onCreated(function helloOnCreated() {
    this.splittedString = new ReactiveVar('');
    splitString('Hello');
});

Template.split.helpers({
    counter() {
        return Template.instance().counter.get();
    },
    splittedString() {
        return Template.instance().splittedString.get();
    }
});

Template.split.events({
    'click button'(event, instance) {
        let splittedString = splitString(document.getElementById('inputString').value);
        instance.splittedString.set(splittedString);
    },
});


Template.alternate.onCreated(function helloOnCreated() {
    this.alternatedString = new ReactiveVar('');
    alternateString('Hello');
});

Template.alternate.helpers({
    alternatedString() {
        return Template.instance().alternatedString.get();
    }
});

Template.alternate.events({
    'click button'(event, instance) {
        let alternatedString = alternateString(document.getElementById('inputString').value);
        instance.alternatedString.set(alternatedString);
    },
});


Template.partition.onCreated(function helloOnCreated() {
    this.partitionedString = new ReactiveArray();
    // partitionString('hello world');
});

Template.partition.helpers({
    partitionedString() {
        return Template.instance().partitionedString.get();
    }
});

Template.partition.events({
    'click button'(event, instance) {
        let partitionedString = partitionString(document.getElementById('partitionString').value);
        console.log('partition.events');
        console.log(partitionedString);
        instance.partitionedString.set(partitionedString);
    },
});


Template.numbers.onCreated(function helloOnCreated() {
    this.numbersArray = new ReactiveArray();
    console.log('numbers');
    createRandomNumbersArray(50, 100, 3);
});

Template.numbers.helpers({
    numbersArray() {
        return Template.instance().numbersArray.get();
    }
});

Template.numbers.events({
    'click button'(event, instance) {
        let min = parseInt(document.getElementById('min').value);
        let max = parseInt(document.getElementById('max').value);
        let len = parseInt(document.getElementById('len').value);
        let numberArray = createRandomNumbersArray(min, max, len);
        console.log('numbers.events');
        console.log(numberArray);
        instance.numbersArray.set(numberArray);
    },
});
