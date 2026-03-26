// [SECTION] JS Functions
// Performs specific task and eliminate repeatetive codes

/* function functionname(parameter) {
    // code block
} */

function sayHello() {
  console.log("Hello, San Fernando City, Pampanga!");
}

// Invocation/Invoke or Function Calling

sayHello();

function showAlert() {
  alert("Hello!");
}

let num1 = 0,
  num2 = 0;

function startCalc() {
  let userInput = parseInt(
    prompt(
      "Please select an action: \n [1] Input Numbers \n [2] Sum\n [3] Difference\n [4] Product\n [5] Quotient\n [6] Reset",
    ),
  );

  switch (userInput) {
    case 1:
      enterNum();
      startCalc();
      break;

    case 2:
      sum();
      startCalc();
      break;

    case 3:
      difference();
      startCalc();
      break;

    case 4:
      product();
      startCalc();
      break;

    case 5:
      quotient();
      startCalc();
      break;

    case 6:
      reset();
      startCalc();
      break;

    default:
      alert("Please Enter Valid Option.");
      startCalc();
  }
}

function enterNum() {
  if (num1 > 0 && num2 > 0) {
    alert("num1 and num2 has value.");
  } else {
    let inputNum1 = parseInt(prompt("Enter Number 1."));
    let inputNum2 = parseInt(prompt("Enter Number 2."));
    num1 = inputNum1;
    num2 = inputNum2;
  }
}

function sum() {
  // Template Literal ${}
  if (num1 == 0 && num2 == 0) {
    alert("Please Enter num1 or num2");
  } else {
    alert(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
  }
}

function difference() {
  // Template Literal ${}
  if (num1 == 0 && num2 == 0) {
    alert("Please Enter num1 or num2");
  } else {
    alert(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
  }
}

function product() {
  // Template Literal ${}
  if (num1 == 0 && num2 == 0) {
    alert("Please Enter num1 or num2");
  } else {
    alert(`The product of ${num1} and ${num2} is ${num1 * num2}`);
  }
}

function quotient() {
  // Template Literal ${}
  if (num1 == 0 && num2 == 0) {
    alert("Please Enter num1 or num2");
  } else {
    alert(`The quotient of ${num1} and ${num2} is ${num1 / num2}`);
  }
}

function reset() {
  // Template Literal ${}
  if (num1 > 0 && num2 > 0) {
    alert("The num1 and num2 reset to 0");
    num1 = 0;
    num2 = 0;
  } else {
    alert("num1 and num2 is already 0");
  }
}
