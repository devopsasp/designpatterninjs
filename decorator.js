// Component interface
class Coffee {
  cost() {
    throw new Error("Method must be implemented.");
  }

  ingredients() {
    throw new Error("Method must be implemented.");
  }
}

// Concrete Component class
class SimpleCoffee extends Coffee {
  cost() {
    return 1;
  }

  ingredients() {
    return "Coffee";
  }
}

// Decorator abstract class
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.decoratedCoffee = coffee;
  }

  cost() {
    return this.decoratedCoffee.cost();
  }

  ingredients() {
    return this.decoratedCoffee.ingredients();
  }
}

// Concrete Decorator classes
class MilkDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  cost() {
    return super.cost() + 0.5;
  }

  ingredients() {
    return super.ingredients() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  cost() {
    return super.cost() + 0.25;
  }

  ingredients() {
    return super.ingredients() + ", Sugar";
  }
}

class WhippedCreamDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  cost() {
    return super.cost() + 1;
  }

  ingredients() {
    return super.ingredients() + ", Whipped Cream";
  }
}

// Client code
const coffee = new SimpleCoffee();
console.log(`Cost: ${coffee.cost()}; Ingredients: ${coffee.ingredients()}`);

const coffeeWithMilk = new MilkDecorator(coffee);
console.log(
  `Cost: ${coffeeWithMilk.cost()}; Ingredients: ${coffeeWithMilk.ingredients()}`
);

const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
console.log(
  `Cost: ${coffeeWithMilkAndSugar.cost()}; Ingredients: ${coffeeWithMilkAndSugar.ingredients()}`
);

const coffeeWithMilkSugarAndWhippedCream = new WhippedCreamDecorator(
  coffeeWithMilkAndSugar
);
console.log(
  `Cost: ${coffeeWithMilkSugarAndWhippedCream.cost()}; Ingredients: ${coffeeWithMilkSugarAndWhippedCream.ingredients()}`
);
