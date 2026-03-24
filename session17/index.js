// [SECTION] Repeatition Control Structure
// 1. do loop

/*
SYNTAX:

while (condition) {
    // code block
    // iteration
}

*/

let count = 0;

while (count < 5) {
  console.log("Do Loop: " + count);
  count++;
}

/* 
1st iteration
let count = 0;

while (0 < 5) {
  console.log("Do Loop: " + count);
  count++;
}

RESULT: Do Loop: 0

2nd iteration
let count = 1;

while (1 < 5) {
  console.log("Do Loop: " + count);
  count++;
}

RESULT: Do Loop: 1

3rd iteration
let count = 2;

while (2 < 5) {
  console.log("Do Loop: " + count);
  count++;
}

RESULT: Do Loop: 2

4th iteration
let count = 3;

while (3 < 5) {
  console.log("Do Loop: " + count);
  count++;
}

RESULT: Do Loop: 3

5th iteration
let count = 4;

while (4 < 5) {
  console.log("Do Loop: " + count);
  count++;
}

RESULT: Do Loop: 4

6th iteration
let count = 5;

while (5 < 5) { 
  console.log("Do Loop: " + count);
  count++;
}

Hangang 5th iteration lang kasi equal ang 5 < 5

*/

// 2. do while

/*
SYNTAX:

do {
    // code block
    // iteration
} while (condition)
*/

let score = 0; // <-- Global Scope Variable Pwede Gamitin Anywhere

do {
  console.log("Do While Loop: " + score);
  score++;
} while (score < 5);

// Sa While Loop error agad pero sa Do While Loop mag eexecute muna yung do block bago mag error

// 3. For Loop

/*
SYNTAX:

for (initialization; condition; iterator) {
    // code block
}
*/

for (let i = 0; i < 5; i++) {
  // <-- Local Scope Variable Sa For Loop lang pwede gamitin
  console.log("For Loop: " + i);
}

for (let i = 0; i < 10; i++) {
  if (i % 3 == 0) {
    console.log("Count: " + i + " - Divisible by 3");
  } else {
    console.log("Count: " + i);
  }
}

// continue and break

for (let count = 0; count < 20; count++) {
  if (count == 18) {
    break;
  }
  console.log("Count: " + count);
}

let isRunning = true;
let isLocked = false;
let isLoggedIn = false;
let accountLocked = 0;
let password = "hello123";

while (isRunning) {
  if (accountLocked != 3) {
    let input = prompt("Please enter your password.");

    if (input != password) {
      accountLocked++;
    } else {
      isLoggedIn = true;
      alert("Welcome User!");
    }
  } else {
    alert("Account is locked! Please contact the admin.");
    isRunning = false;
  }
}

let input = parseInt(prompt("Please enter a number:"));

for (let i = 0; i < input; i++) {
  console.log(i);
}
