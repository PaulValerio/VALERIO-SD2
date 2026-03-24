console.log("Hello World!");

// [SECTION] Selection Control Structure
// 1. if-else else-if statement

let age = 21;

if (age >= 18) {
  console.log("You're eligible for driver's license.");
}

let city = "manila";

if (city == "manila") {
  console.log("Welcome to the capital region.");
} else {
  console.log("The selected area is not in Manila.");
}

if (age >= 18 && city == "manila") {
  console.log("You can register for the event.");
} else if (age <= 18) {
  console.log("You're not eligible for the event.");
} else {
  console.log("All criteria not met.");
}

let role = prompt("Please enter your role.").toLocaleLowerCase();

// if (role == "admin") {
//   alert("Welcome to UA Portal, Administrator");
// } else if (role == "teacher") {
//   alert("Welcome to UA Portal, Faculty");
// } else {
//   alert("Please enter valid role.");
// }

// 2. Switch-Case Statement
let day = 10;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wenesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Please enter between 1-5 only. ");
}

switch (role) {
  case "admin":
    alert("Welcome to UA Portal, Administrator!");
    break;
  case "teacher":
    alert("Welcome to UA Portal, Faculty!");
    break;
  case "student":
    alert("Welcome to UA Portal, Assumptionista!");
    break;
  default:
    alert("Please enter valid role.");
    break;
}
