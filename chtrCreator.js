const readline = require('readline-sync');

let diceRolled = [];
let character1 = {
    //empty for now
}

createChar(diceRolled)

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
        sum+list[i]
    }
    console.log(`The total was: ${sum}.`)
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list)
}

function createChar(list){
    character.name = readLine.question("Enter Character Name: ");
    console.log('Rolling Strength')
    character.strength= rollStat(diceRolled);
    console.log('Rolling Dexterity')
    character.dexterity= rollStat(diceRolled);
    console.log('Rolling Constitution')
    character.constitution= rollStat(diceRolled);
    console.log('Rolling Intelligence')
    character.intelligence= rollStat(diceRolled);
    console.log('Rolling Wisdom')
    character.wisdom= rollStat(diceRolled);
    console.log('Rolling Charisma')
    character.charisma= rollStat(diceRolled);
    displayChar(Character)
}

function displayChar(char){
    console.log(`--------------------------------`);
    console.log(`Name: ${char.name}`);
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.dexterity}`);
    console.log(`CON: ${char.constitution}`);
    console.log(`INT: ${char.intelligence}`);
    console.log(`WIS: ${char.wisdom}`);
    console.log(`CHA: ${char.charisma}`);
}