/*
Discussion Topic List:

1. Arithmetic Operators
2. Addition Operator (+)
3. Subtraction Operator (-)
4. Multiplication Operator (*)
5. Division Operator (/)
Assignment Operators
Basic Assignment Operator (=)
Addition Assignment Operator (+=)
Subtraction Assignment Operator (-=)
Multiple Operators and Parentheses
Increment and Decrement
Increment Operator (++)
Decrement Operator (--)
Type Coercion
Comparison Operators
Equality Operator (==)
Inequality Operator (!=)
Strict Equality Operator (===)
Strict Inequality Operator (!==)
Relational Operators
Greater Than Operator (>)
Greater Than or Equal To Operator (>=)
Less Than Operator (<)
Less Than or Equal To Operator (<=)
Logical Operators<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Operators</title>
</head>
<body>
    

    <script src="./index.js"></script>
</body>
</html>
Logical AND Operator (&&)
Logical OR Operator (||)
Logical NOT Operator (!)
*/

// [SECTION] Arithmetic Operators

let num1 = 10;
let num2 = 2;

let sum = num1 + num2;

console.log("SUM: " + sum);

let diff = num1 - num2;

console.log("DIFFERENCE: " + diff);

let prod = num1 * num2;

console.log("PRODUCT: " + prod);

let quo = num1 / num2;

console.log("QUOTIENT: " + quo);

let mod = num1 % num2;

console.log("MODULO: " + mod);

// [SECTION] Asignment Operators
let num3 = 20;
let num4 = 8;

// let sum1 = num1 + num1; -> old method

// num3 = 20
num3 += num3;
console.log("ASSIGNMENT OPERATOR: " + num3);

// num4 = 8
num4 += num3;
console.log("ASSIGNMENT OPERATOR: " + num4);

// [SECTION] Incrementation VS Decrementation
// INC (++), DEC (--) | let age = 10; age++ -> post

// INC
// Pre
let days = 5;
console.log("Orignal Value: " + days);

days++;

console.log("Pre-Increment1 Value: " + days);

days++;
console.log("Pre-Increment1 Value: " + days);

// Post
let month = 4;
console.log("Orignal Value: " + month);

++month;
console.log("Post-Increment1 Value: " + month);

++month;
console.log("Post-Increment1 Value: " + month);

// For Loop Statement lagi niyang kinukuha is original value second loop doon palang and mag aadd or ssubtract

// DEC
// Pre
let days1 = 5;
console.log("Orignal Value: " + days1);

days1--;

console.log("Pre-Increment1 Value: " + days1);

days1--;
console.log("Pre-Increment1 Value: " + days1);

// Post
let month1 = 4;
console.log("Orignal Value: " + month1);

--month1;
console.log("Post-Increment1 Value: " + month1);

--month1;
console.log("Post-Increment1 Value: " + month1);

// [SECTION] Comparison Operators

let num5 = 10;
let num6 = 12;
let num7 = "10";

// Equality Operator
let equality = num5 == num6;
let equality2 = num5 == num7;
console.log("Equality Operator: " + equality);
console.log("Equality Operator: " + equality2);

// Strict Equality
let equality3 = num5 === num6;
let equality4 = num5 === num7;
console.log("Strict Equality Operator: " + equality3);
console.log("Strict Equality Operator: " + equality4);

// Not Equal
let notEqual1 = num5 != num6;
let notEqual2 = num5 != num7;
console.log("Not Equality Operator: " + notEqual1);
console.log("Not Equality Operator: " + notEqual2);

// Strict Not Equal
let snotEqual1 = num5 !== num6;
let snotEqual2 = num5 !== num7;
console.log("Strict Not Equality Operator: " + snotEqual1);
console.log("Strict Not Equality Operator: " + snotEqual2);

// [SECTION] Relational Operation
let num8 = 25;
let num9 = 15;

console.log("GT: ", num8 > num9);
console.log("LT: ", num8 < num9);
console.log("LToE: ", num8 >= num9);
console.log("LToE: ", num8 <= num9);

// [SECTION] Logical Operation
let isLegalAge = true,
  isMarried = false,
  isVoter = true;

// Logical AND (&&)
console.log("Logical AND", isLegalAge && isMarried && isVoter);

// Logical OR (||)
console.log("Logical OR", isLegalAge || isMarried || isVoter);

// Logical NOT (!)
console.log("Logical NOT", !isMarried);

// [SECTION] Large Scale Data Types
// Arrays
// > can store multiple elements/values
// > values must be the same data type
let array = [10, 20, 30];
let names = ["eva", "skylar", "elle"];
console.log(names);

let mixedArr = ["mew", 3, true];
console.log(mixedArr);

// Objects
// > it consist a key/property and a paired value
let user = {
  name: "eva",
  gradeLevel: 3,
  isEnrolled: true,
};

console.log(user);

// [SECTION] Alert vs Prompt
// alert("Hello World!");
console.log("Hello");

let completeName = prompt("Please Enter Your Name.");

console.log("Hello! " + completeName);

let input1 = parseInt(prompt("Enter num1"));
let input2 = parseInt(prompt("Enter num2"));

let sum2 = input1 + input2;
console.log("SUM FROM PROMPT: " + sum2);
