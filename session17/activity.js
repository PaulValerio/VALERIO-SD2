let input = parseInt(prompt("Please enter a number:"));

for (let i = 1; i <= input; i++) {
  console.log("Count: " + i);
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Count: " + i + " - Coco Melon");
  } else if (i % 3 == 0) {
    console.log("Count: " + i + " - Coco");
  } else if (i % 5 == 0) {
    console.log("Count: " + i + " - Melon");
  }
}
