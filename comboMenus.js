const readLine = require('readline-sync');

console.log("What sandwich would you like to order? \nWe have a Chicken for $5.25, a beef for $6.25, and a tofu for $5.75! ");

let order = [];
order.push( readLine.question("What Sandwhich you would like to have?: "));
console.log(`You ordered: ${order[0]}`);

let order2 = readLine.question("Would you like a drink?: ");
console.log(order2);

if (answer == "yes"){
    console.log(readLine.question("What drink size do you want?: "));
}  else if(answer == "no"){
    console.log("Oh ok then...")
}