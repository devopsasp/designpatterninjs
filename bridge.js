// Abstraction
class Vehicle {
  constructor(implementation) {
    this.implementation = implementation;
  }

  operation() {
    this.implementation.operationImplementation();
  }
}

// Refined Abstraction
class Car extends Vehicle {
  constructor(implementation) {
    super(implementation);
  }

  assemble() {
    console.log("Assembling a car...");
    this.operation();
  }
}

class Truck extends Vehicle {
  constructor(implementation) {
    super(implementation);
  }

  assemble() {
    console.log("Assembling a truck...");
    this.operation();
  }
}

// Implementation
class Production {
  operationImplementation() {
    console.log("Producing a vehicle...");
  }
}

class Testing {
  operationImplementation() {
    console.log("Testing a vehicle...");
  }
}

// Usage
const carProduction = new Car(new Production());
carProduction.assemble();
// Output:
// Assembling a car...
// Producing a vehicle...

const truckTesting = new Truck(new Testing());
truckTesting.assemble();
// Output:
// Assembling a truck...
// Testing a vehicle...
