// Parameters are placeholder variables that allow us to reuse functions

// Example 1: Without Parameter
function printYes(){
    console.log("yes");
}

printYes();

//Example 2: With parameter
function printText(text){
    console.log(text);
}

printText("Happy Thursday!");
printText("Tomorrow is Friday!");

//Return statements provide values to the rest of the program
//Returned values can be used by other parts of the code
//console.log only produces "side effects" that cannot be used by other parts of the code

//Example 3: With side effects (no return)
function double(n){
    console.log(n*2);
}

double(3);
double(911);
double(29);

//Example 4: Using return
function triple(n){
    return (n*3);
}
let lives = triple(7);
lives -=1;
lives +=2;
console.log(lives);

console.log(triple(2));

//Scope is the part of the program where the binding (value of a variable) is visible.
//global scope: created outside all {} and accessible everywhere
//local scope: created inside a {} and only accessible inside that {}

//Example 5: Different scopes
let x=10;
if (x>1){
    let y=20; //local y
    let z= 30; //local z
    console.log(x+y+z);
}
console.log(x);

//Example 6: no naming conflict
function half(n){
    return (n/2);
}
let n=10;
console.log(half(100));
console.log(n);

//q1
function nameSwapper() {
    let first = readLine.question("First Name:");
    let last = readLine.question("Last Name:");
    return(`${last}, ${first}`)
}

let myName = nameSwapper();
console.log(myName);