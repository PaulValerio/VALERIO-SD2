// This is how we print an output using JS
// console.log("Hello World!" | variable);
console.log("Hello World!");

// This is a single line comment

/*
This
a multi line
comment
*/

// [SECTION] VARIABLE
// Acts as a storage for data which can be modified afterwards except constant

// int - whole number | float, double - decimal
// float - 7 decimal places | double - 15 decimal places
// str - alpha numeric enclose in single or double quote
// boolean - true or false, 1 or 0

// [SECTION] DATA TYPE
// Numeric Data Types
/*
let [variableName]; -> no initialized value
let [variableName] = value; -> with initialized value
JS adjust what data type is used in let
*/

let age;
let height = 100;

console.log(height);

//JS is a loose-type Programing Language
// Synchronous PL - above to bottom | left to right

let gwa = 99.75;

console.log(gwa);

// Character Data Type
let firstName = "Jonny";

console.log(firstName);

//typeof - checking of variable's type of data

console.log(typeof firstName);
console.log(typeof gwa);
console.log(typeof height);

// Text Casing in JS
// Camel Casing - thisIsCamelCasing
// Snake Casing - this_is_snake_case
// Pascal Casing - ThisIsPascalCase
// Kebab Casing - this-is-kebab-case
// Pascal Kebab Casing - This-Is-Pascal-Kebab-Case

// Boolean Data Types
let isMarried = false;
let isRegistered = true;

console.log(isMarried, isRegistered);

console.log(typeof isMarried, typeof isRegistered);

// Concatenation - combining two strings
let province = "Pampanga";

console.log("I love in " + province);

// Type-Coercion - Concatenation of a string and a number or other data types that will be all converted to a string
console.log("My overall grade is: " + gwa);
