//create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 5555555,
    bro: 9876543,
}

//log all
console.log(contacts);

//access a specific entry by its key
console.log(contacts.bff);

//can't access if the key doesn't exist
console.log(contacts.myself);

//add a new entry
contacts.sis = 3456677;
console.log(contacts);

//update an entry
contacts.bff = 1111111;
console.log(contacts)

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called __ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are like arrays - pass by reference (location) not by value
//notice the following
let a = {
    value: 20
};

let b = a;
let c = {
    value: 20
};

console.log(a == b); //same object, as b points to a
console.log(a == c); //different objects with same value
console.log(b == c); //different objects with same value
console.log(a.value == c.value); //the value is the same, but not the object

//numbers are passed by value, not by reference. Similar for strings and booleans.
//create 5 objects below:

let dog = {
    dogName: 'Zelda',
    breed: 'Terrier',
    age: 9,
    size: 'Medium',
    bark: true
}
console.log(dog);

let beford = {
    height: '7 ft',
    age: 17,
    weight: '167 lbs',
    Ethnicity: 'Jamaican/American',
}

let charles = {
    height: '5"8',
    age: 24,
    weight: '135 lbs',
    Ethnicity: 'British/Scotish',
}

let jeffery = {
    height: '5"5',
    age: 22,
    weight: '184 lbs',
    Ethnicity: 'American',
}

let tigger = {
    height: '7"2',
    age: 15,
    weight: '159 lbs',
    Ethnicity: 'Korean',
}

let olash = {
    height: '4"3',
    age: 30,
    weight: '120 lbs',
    Ethnicity: 'Arabic',
}