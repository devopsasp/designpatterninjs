// Target interface
class Duck {
  quack() {
    console.log("Quack!");
  }

  fly() {
    console.log("I'm flying!");
  }
}

// Adaptee interface
class Turkey {
  gobble() {
    console.log("Gobble!");
  }

  flyShortDistance() {
    console.log("I'm flying a short distance!");
  }
}

// Adapter class
class TurkeyAdapter {
  constructor(turkey) {
    this.turkey = turkey;
  }

  quack() {
    this.turkey.gobble();
  }

  fly() {
    for (let i = 0; i < 5; i++) {
      this.turkey.flyShortDistance();
    }
  }
}

// Client code
const turkey = new Turkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

turkeyAdapter.quack(); // Output: Gobble!
turkeyAdapter.fly(); // Output: I'm flying a short distance! (5 times)
