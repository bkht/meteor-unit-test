import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { splitString } from './stringHelpers';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    this.splittedString = new ReactiveVar('');
});

Template.hello.helpers({
    counter() {
        return Template.instance().counter.get();
    },
    splittedString() {
        return Template.instance().splittedString.get();
    }
});

Template.hello.events({
    'click button'(event, instance) {
        let splittedString = splitString(document.getElementById('inputString').value);
        instance.splittedString.set(splittedString);
    },
});
