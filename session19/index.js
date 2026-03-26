// [SECTION] Functions With Parameters
/*
SYNTAX:

function functionName(params1, params2, ...) {
    // code block
}
*/

function greeting() {
  let userInput = prompt("Please enter your name.");

  alert("Hello, " + userInput);
}

// function with Parameter
// name -> is our Parameter
// parameters acts as a variable or storage for a specific function
// kapag may parameter dapat may argument sa invocation
function sayHello(name) {
  alert("Hello from function with parameter, " + name);
}

// sayHello(argument); -> is to be passed in the function parameter
// sayHello("HWEY");

// Multiple Parameters
// undefined -> has no definite value
function completeName(firstName, middleName, lastName) {
  alert(`Hello, ${firstName} ${middleName} ${lastName}`);
}

// completeName("Juan", "Two", "Three");

// Functions with return statement
// return -> will hold a value to be passed outside the function
function print() {
  console.log("Hello");
  return "World";
}

let sum = function (num1, num2) {
  let total = num1 + num2;
  console.log("Total: " + total);
  return total;
};

let result = sum(45, 45);
checkRemarks(result);

function checkRemarks(score) {
  if (score >= 75) {
    console.log("passed!");
  } else {
    console.log("failed!");
  }
}

let registration = function (name, age) {
  if (age <= 17) {
    console.log("Sorry, you cannot register.");
  } else {
    console.log(`${name} please proceed to the next part`);
    return age;
  }
};

let value = registration("Paul Valerio", 21);

function checkAge(age) {
  if (age <= 17) {
    console.log("You cannot proceed!");
  } else {
    console.log("You can apply for premium account.");
  }
}

checkAge(value);
