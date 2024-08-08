// Product class
class Car {
  constructor() {
    this.make = "";
    this.model = "";
    this.year = "";
    this.color = "";
  }

  setMake(make) {
    this.make = make;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  toString() {
    return `Car: ${this.make} ${this.model} ${this.year} ${this.color}`;
  }
}

// Builder class
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  withMake(make) {
    this.car.setMake(make);
    return this;
  }

  withModel(model) {
    this.car.setModel(model);
    return this;
  }

  withYear(year) {
    this.car.setYear(year);
    return this;
  }

  withColor(color) {
    this.car.setColor(color);
    return this;
  }

  build() {
    return this.car;
  }
}

// Director class
class CarDirector {
  constructor(builder) {
    this.builder = builder;
  }

  constructSportsCar() {
    this.builder
      .withMake("Porsche")
      .withModel("911")
      .withYear("2022")
      .withColor("Red");
    return this.builder.build();
  }

  constructFamilyCar() {
    this.builder
      .withMake("Toyota")
      .withModel("Camry")
      .withYear("2020")
      .withColor("Silver");
    return this.builder.build();
  }
}

// Usage
const builder = new CarBuilder();
const director = new CarDirector(builder);

const sportsCar = director.constructSportsCar();
console.log(sportsCar.toString()); // Output: Car: Porsche 911 2022 Red

const familyCar = director.constructFamilyCar();
console.log(familyCar.toString()); // Output: Car: Toyota Camry 2020 Silver
