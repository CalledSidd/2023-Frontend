

let firstName = 'Sidharth';

let lastName = 'S';

const interestRate = 0.3;

// interestRate = 1; 
// the line above would be an error, constants cannot be reassigned if a variable requires re assign make it let
// the value of a variable can change but constants can't be changed

console.log(interestRate)

let isApproved = true;
let FirstName; // when a variable is not defined it's undefined
let selectedColor = null;

// JavaScript is a dynamically typed language what that means is that the type of a variable can change at runtime


//Reference Types : Objects, Arrays, Functions 
//Objects and Arrays

const person = {
    name : 'Sidharth',
    age : 18
};
console.log(person)

person.name = 'Nithya'
person.age = 21

console.log(person)

person['name'] = 'Imeya'

console.log(person.name)
let selectedColors = ['red', 'blue']

selectedColors[2]  = 'violet'

console.log(selectedColors)

console.log(typeof(selectedColors))

console.log(selectedColors.length)

// Functions

function greet(input) {
    console.log(input);
}

greet("This is used as in");