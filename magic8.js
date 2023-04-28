const readLine = require('readline-sync');
let answers=['yes', 'no', 'maybe', 'never', 'always'];

console.log("Welcome to the 8ball machine!");

readLine.question("Enter a question: ");

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log(answer);
