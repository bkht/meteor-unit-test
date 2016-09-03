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

// Template.quote.onCreated(function helloOnCreated() {
//     this.quoteString = new ReactiveVar('');
//     quoteInterval = Meteor.setInterval(setQuote, 1000);
// });
//
// Template.quote.onDestroyed(function helloOnDestroyed() {
//     Meteor.clearInterval(quoteInterval);
// });

Template.quote.helpers({
    // getQuote() {
    //     return Template.instance().quoteString.get();
    // }
    getQuote() {
        var quotes = [
            {
                "line": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
                "author": "Brian W. Kernighan"
            },
            {
                "line": "Walking on water and developing software from a specification are easy if both are frozen.",
                "author": "Edward V Berard"
            },
            {
                "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
                "author": "Hofstadter's Law"
            },
            {
                "line": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
                "author": "Rick Osborne"
            },
            {
                "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
                "author": "Jan L. A. van de Snepscheut"
            },
            {
                "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
                "author": "Bill Gates"
            },
            {
                "line": "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
                "author": "Leon Bambrick"
            },
            {
                "line": "Nine people can't make a baby in a month.",
                "author": "Fred Brooks"
            },
            {
                "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
                "author": "Edsger Dijkstra"
            },
            {
                "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
                "author": "Tom Cargill"
            },
            {
                "line": "Make things as simple as possible, but not simpler.",
                "author": "Albert Einstein"
            },
            {
                "line": "There are two ways to write error-free programs; only the third one works.",
                "author": "Alan Perlis"
            },
            {
                "line": "Program testing can be used to show the presence of bugs, but never to show their absence!",
                "author": "Edsger W. Dijkstra"
            },
            {
                "line": "Java is to JavaScript what Car is to Carpet.",
                "author": "Chris Heilmann"
            },
            {
                "line": "The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.",
                "author": "Anonymous"
            },
            {
                "line": "It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
                "author": "Andrew Hunt and David Thomas"
            },
            {
                "line": "Good code is its own best documentation. As you're about to add a comment, ask yourself, \"How can I improve the code so that this comment isn't needed?\" Improve the code and then document it to make it even clearer.",
                "author": "Steve McConnell"
            },
            {
                "line": "Programs must be written for people to read, and only incidentally for machines to execute.",
                "author": "Abelson / Sussman"
            },
            {
                "line": "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
                "author": "Alan Kay"
            },
            {
                "line": "Programming can be fun, so can cryptography; however they should not be combined.",
                "author": "Kreitzberg and Shneiderman"
            },
            {
                "line": "Copy and paste is a design error.",
                "author": "David Parnas"
            },
            {
                "line": "Without requirements or design, programming is the art of adding bugs to an empty text file.",
                "author": "Louis Srygley"
            },
            {
                "line": "Computers are good at following instructions, but not at reading your mind.",
                "author": "Donald Knuth"
            },
            {
                "line": "Before software can be reusable it first has to be usable.",
                "author": "Ralph Johnson"
            },
            {
                "line": "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
                "author": "Rich Cook"
            },
            {
                "line": "I don’t care if it works on your machine! We are not shipping your machine!",
                "author": "Ovidiu Platon"
            },
            {
                "line": "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
                "author": "Bjarne Stroustrup"
            },
            {
                "line": "It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration.",
                "author": "E. W. Dijkstra"
            },
            {
                "line": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
                "author": "Martin Fowler"
            },
            {
                "line": "When debugging, novices insert corrective code; experts remove defective code.",
                "author": "Richard Pattis"
            },
            {
                "line": "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.",
                "author": "Eric S. Raymond"
            },
            {
                "line": "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
                "author": "Linus Torvalds"
            },
            {
                "line": "One of my most productive days was throwing away 1000 lines of code.",
                "author": "Ken Thompson"
            },
            {
                "line": "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
                "author": "Anonymous"
            },
            {
                "line": "I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing.",
                "author": "Oktal"
            },
            {
                "line": "Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development.",
                "author": "Anonymous"
            },
            {
                "line": "A good programmer is someone who always looks both ways before crossing a one-way street.",
                "author": "Doug Linder"
            },
            {
                "line": "In order to understand recursion, one must first understand recursion.",
                "author": "Anonymous"
            },
            {
                "line": "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.",
                "author": "Seymour Cray"
            }
        ];
        let length = quotes.length;
        let number = Math.floor(Math.random() * length);
        // quoteString = quotes[number];
        return quotes[number];
    }
});
