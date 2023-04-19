const readLine = require('readline-sync');

let diceRolled = [];
let eyeColors = ['blue','green','brown','red'];
let hairColors = ['bald','green','brown','black'];
let species = ['Alien','Human','Hybrid','Animal'];
let character1 = {

}

createChar(character1, diceRolled)

function rolld6(){
    return Math.ceil(Math.random()*6)
}
console.log(rolld6());

function rollDice(amount, list){
    for (let i=0; i<amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`)
        list.push(roll)
    }
}

function sum(list){
    let sum=0;
    for(let i=0; i<list.length; i++){
        sum+=list[i]
    }
    console.log(`The total was: ${sum}.`)
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list)
}

function pickRandomChoice(choices){
    let randomNum = Math.floor(Math.random()*choices.length);
    return choices[randomNum];
}

function createChar(character, list){
    character.name = readLine.question("Enter Character Name: ");
    console.log('Rolling STR')
    character.strength= rollStat(diceRolled);
    console.log('Rolling DEX')
    character.dexterity= rollStat(diceRolled);
    console.log('Rolling CON')
    character.constitution= rollStat(diceRolled);
    console.log('Rolling INT')
    character.intelligence= rollStat(diceRolled);
    console.log('Rolling WIS')
    character.wisdom= rollStat(diceRolled);
    console.log('Rolling CHA')
    character.charisma= rollStat(diceRolled);
    console.log('Rolling LUCK')
    character.luck= rollStat(diceRolled);
    character.luck = rolld6();
    character.eyeColor = pickRandomChoice(eyeColors);
    character.hairColor = pickRandomChoice(hairColors);
    character.specie = pickRandomChoice(species);
    console.log(character)
}

function displayChar(char){
    console.log(`------------------------------`);
    console.log(`Name: ${char.name}`);
    console.log(`Eye Color: ${char.eyeColor}`);
    console.log(`Hair Color: ${char.hairColor}`);
    console.log(`Species: ${char.specie}`);
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.dexterity}`);
    console.log(`CON: ${char.constitution}`);
    console.log(`INT: ${char.intelligence}`);
    console.log(`WIS: ${char.wisdom}`);
    console.log(`CHA: ${char.charisma}`);
    console.log(`LUCK: ${char.luck}`);
    console.log(`------------------------------`);
}