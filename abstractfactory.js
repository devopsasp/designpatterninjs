// Abstract Factory
class AbstractFactory {
  createProductA() {
    throw new Error("Method must be implemented");
  }

  createProductB() {
    throw new Error("Method must be implemented");
  }
}

// Concrete Factory 1
class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ProductA1();
  }

  createProductB() {
    return new ProductB1();
  }
}

// Concrete Factory 2
class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ProductA2();
  }

  createProductB() {
    return new ProductB2();
  }
}

// Abstract Products
class AbstractProductA {
  operationA() {
    throw new Error("Method must be implemented");
  }
}

class AbstractProductB {
  operationB() {
    throw new Error("Method must be implemented");
  }
}

// Concrete Products
class ProductA1 extends AbstractProductA {
  operationA() {
    console.log("Product A1 operation");
  }
}

class ProductB1 extends AbstractProductB {
  operationB() {
    console.log("Product B1 operation");
  }
}

class ProductA2 extends AbstractProductA {
  operationA() {
    console.log("Product A2 operation");
  }
}

class ProductB2 extends AbstractProductB {
  operationB() {
    console.log("Product B2 operation");
  }
}

// Client code
function clientCode(factory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  productA.operationA();
  productB.operationB();
}

// Usage
const factory1 = new ConcreteFactory1();
clientCode(factory1); // Output: Product A1 operation, Product B1 operation

const factory2 = new ConcreteFactory2();
clientCode(factory2); // Output: Product A2 operation, Product B2 operation
