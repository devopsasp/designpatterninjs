// Prototype class
function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function () {
  console.log("The animal makes a sound.");
};

// Concrete prototype classes
function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.sound = function () {
  console.log("The dog barks.");
};

function Cat(name) {
  Animal.call(this, name);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.sound = function () {
  console.log("The cat meows.");
};

// Usage
const dog = new Dog("Fido");
dog.sound(); // Output: The dog barks.

const cat = new Cat("Whiskers");
cat.sound(); // Output: The cat meows.
