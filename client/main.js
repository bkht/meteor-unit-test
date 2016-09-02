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
    this.partitionedString = new ReactiveVar('');
    partitionString('h');
});

Template.partition.helpers({
    partitionedString() {
        return Template.instance().partitionedString.get();
    }
});

Template.partition.events({
    'click button'(event, instance) {
        let partitionedString = partitionString(document.getElementById('inputString').value);
        instance.partitionedString.set(partitionedString);
    },
});

Template.numbers.onCreated(function helloOnCreated() {
    console.log('numbers');
    createRandomNumbersArray(50, 100, 3);
});

