// Component interface
class Coffee {
  cost() {
    throw new Error("Coffee must implement cost method");
  }

  ingredients() {
    throw new Error("Coffee must implement ingredients method");
  }
}

// Concrete component
class SimpleCoffee extends Coffee {
  cost() {
    return 1;
  }

  ingredients() {
    return "Coffee";
  }
}

// Decorator interface
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

// Concrete decorators
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
// Output: Cost: 1; Ingredients: Coffee

const coffeeWithMilk = new MilkDecorator(coffee);
console.log(
  `Cost: ${coffeeWithMilk.cost()}; Ingredients: ${coffeeWithMilk.ingredients()}`
);
// Output: Cost: 1.5; Ingredients: Coffee, Milk

const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
console.log(
  `Cost: ${coffeeWithMilkAndSugar.cost()}; Ingredients: ${coffeeWithMilkAndSugar.ingredients()}`
);
// Output: Cost: 1.75; Ingredients: Coffee, Milk, Sugar

const coffeeWithMilkSugarAndWhippedCream = new WhippedCreamDecorator(
  coffeeWithMilkAndSugar
);
console.log(
  `Cost: ${coffeeWithMilkSugarAndWhippedCream.cost()}; Ingredients: ${coffeeWithMilkSugarAndWhippedCream.ingredients()}`
);
// Output: Cost: 2.75; Ingredients: Coffee, Milk, Sugar, Whipped Cream
