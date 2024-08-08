// Define the factory function
function VehicleFactory() {}

// Define the classes that the factory will create
class Vehicle {
  drive() {
    throw Error("not implemented");
  }
}
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`Driving a ${this.brand} ${this.model} car`);
  }
}

class Truck {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  drive() {
    console.log(`Driving a ${this.brand} ${this.model} truck`);
  }
}

// Define the factory method
VehicleFactory.prototype.createVehicle = function (type, brand, model) {
  switch (type) {
    case "car":
      return new Car(brand, model);
    case "truck":
      return new Truck(brand, model);
    default:
      throw new Error(`Unsupported vehicle type: ${type}`);
  }
};

const factory = new VehicleFactory();

const myCar = factory.createVehicle("car", "Toyota", "Corolla");
myCar.drive();

const myTruck = factory.createVehicle("truck", "Ford", "F-150");
myTruck.drive();
