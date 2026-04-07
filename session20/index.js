// [SECTION] Array
// An Array is also a storage for multiple elements/value
// Elements should be the same type

let pokemon = ["Pikachu", "Charmander", "Squirtle"];
console.log(pokemon);

console.log(`My Favorite Pokemon is ${pokemon[0].toLocaleUpperCase()}.`);

// Get Length of Array
console.log(pokemon.length);

// Accessing an index that is not existing will result - undefined
console.log(pokemon[10]);

// Array Mutation
// Modifying Array Elements
pokemon[3] = "Bulbasaur";

pokemon[1] = "Charmeleon";
console.log(pokemon);

pokemon[10] = "Greninja";
console.log(pokemon);

// Add an elementon the tail of an array without knowing the actual index number
pokemon[pokemon.length] = "Snorlax";
console.log(pokemon);

// Access the last element on the array
console.log(pokemon[pokemon.length - 1]);

// [SECTION] Modern Array Mutation Methods
let fruits = ["Apple", "Banana", "Melon"];
console.log(`Orignal Array: ${fruits}`);

// push() -> add an element in the tail of an array
fruits.push("Strawberry");
console.log(`Push Method: ${fruits}`);

// pop() -> remove an element in the tail of an array
fruits.pop();
console.log(`Pop Method: ${fruits}`);

// unshift() -> add an element in the head of an array
fruits.unshift("Strawberry");
console.log(`Unshift Method: ${fruits}`);

fruits.unshift("Grapes", "Kiwi", "Cucumber");
console.log(`Unshift Method: ${fruits}`);

// shift() -> remove an element in the head of an array
fruits.shift();
console.log(`Shift Method: ${fruits}`);

// sort() -> sorts elements in an array
fruits.sort();
console.log(`Sort Method: ${fruits}`);

// reverse() -> sorts in reverse manner
fruits.reverse();
console.log(`Reverse Method: ${fruits}`);

// splice() -> adds or remove an element in a specified index
fruits.splice(1, 2, "Blueberry");
console.log(`Splice Method: ${fruits}`);

fruits.splice(1, 1);
console.log(`Splice Method: ${fruits}`);

// forEach -> read each element inside an array
fruits.forEach((x) => {
  console.log(x);
});
