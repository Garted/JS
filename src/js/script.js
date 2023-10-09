"use strict";

const answers = [];
answers.push(prompt("What is yor name?", ""));
answers.push(prompt("What is your second name?", ""));
answers.push(+prompt("How old are you?", ""));
console.log(answers);

console.log(answers[1]);

const category = "toys";
console.log(`url/${category}`); //interpolation
