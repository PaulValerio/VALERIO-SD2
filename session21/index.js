// [SECTION] JavaScript Objects
// Imitates real-world descriptions and real-world objects
/*
let arr = [1, 2, 3];

let obj = {
  name: "Carlito",
  age: 22,
};

console.log(typeof arr);
console.log(typeof obj);

let person = {
  completeName: "Juan Dela Cruz",
  age: 25,
  height: 160,
  weight: 85,
  contactNumber: [1234, 4567],
  address: {
    houseno: 1,
    brgy: "Del Pilar",
    city: "CSFP",
  },
};

console.log(person.contactNumber[1]);
console.log(person.address.brgy);

console.log(person);

// Dot notation
// Access values inside an object property

console.log(person.completeName);

console.log(
  `Hi, my name is ${person.completeName} and I am ${person.age} years old!`,
);

console.log(`${(person.completeName = "Juan Carlito Demagiba")}`);

// Adding a property inside an object

person.email = "juan@gmail.com";

console.log(person);

// Class and Objects
// to add properties in a class use "this" keyword

// Blueprint
function Animal(name, breed, color, kind) {
  // constructors
  this.name = name;
  this.kind = kind;
  this.breed = breed;
  this.color = color;
  this.sound = function () {
    if (this.kind == "Dog") {
      console.log("Woof! Woof!");
    } else if (this.kind == "Cat") {
      console.log("Meow! Meow!");
    } else {
      console.log("Can not provide a sound for this animal.");
    }
  };
}

console.log(Animal);

// Instance -> copy/duplicate of a function class

let dog = new Animal("Bruno", "Husky", "Brown", "Dog");

console.log(dog);
dog.sound();
console.log(dog.name);

let cat = new Animal("Luna", "Puspin", "Brown", "Cat");

console.log(cat);
cat.sound();
console.log(cat.name);

let trex = new Animal("Durex", "Chicken", "Gray", "Trex");

console.log(trex);
trex.sound();
console.log(trex.name);
*/

// [SECTION] Pokemon

function Pokemon(name, level, health, mp) {
  this.name = name;
  this.level = level;
  this.health = health * level;
  this.mp = mp;

  this.tackle = function (target) {
    let damage = 20;
    console.log(
      `${this.name} used tackle attack! Opponent: ${target.name} - Health: ${(target.health -= damage)}`,
    );

    console.log(
      `${this.name} gained 40 MP from tackle! MP: ${(this.mp += 40)}`,
    );
  };

  this.skill1 = function (target) {
    if (this.name == "Pikachu") {
      if (this.mp < 50) {
        console.log(`${this.name}'s mp us not enough! MP: ${this.mp}`);
      } else {
        let damage = 150;
        console.log(`${this.name} used Thunderbolt!`);
        this.mp -= 50;
        target.health -= damage;

        console.log(
          `${this.name} - MP: ${this.mp}, Opponent: ${target.name} - Health: ${target.health}`,
        );
      }
    } else if (this.name == "Charmander") {
      if (this.mp < 50) {
        console.log(`${this.name}'s mp us not enough! MP: ${this.mp}`);
      } else {
        let damage = 150;
        console.log(`${this.name} used Flame Thrower!`);
        this.mp -= 50;
        target.health -= damage;

        console.log(
          `${this.name} - MP: ${this.mp}, Opponent: ${target.name} - Health: ${target.health}`,
        );
      }
    }
  };

  this.healthPotion = function () {
    if (this.health > 500) {
      console.log(`${this.name} can not use health potion!`);
    } else if (this.health + 150 >= 500) {
      let healthUp = 500 - this.healh;
      console.log(`${this.name} heals to ${(this.health += healthUp)}`);
    }
  }
}

let pikachu = new Pokemon("Pikachu", 5, 100, 100);

let charmander = new Pokemon("Charmander", 5, 100, 100);

charmander.tackle(pikachu);

pikachu.healthPotion();

charmander.skill1(pikachu);

pikachu.healthPotion();
pikachu.healthPotion();
pikachu.healthPotion();
pikachu.healthPotion();
pikachu.healthPotion();
pikachu.healthPotion();
pikachu.healthPotion();

charmander.tackle(pikachu);
pikachu.healthPotion();
pikachu.healthPotion();

console.log(pikachu);
