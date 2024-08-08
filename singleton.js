// Singleton class
class Singleton {
  static instance;

  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  // Some method
  doSomething() {
    console.log("Doing something...");
  }
}

// Usage
const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2); // true

singleton1.doSomething(); // Output: Doing something...
singleton2.doSomething(); // Output: Doing something...
