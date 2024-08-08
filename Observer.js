// Observer interface
class Observer {
  update(data) {
    throw new Error("Observer must implement update method");
  }
}

// Concrete observers
class ConcreteObserverA extends Observer {
  update(data) {
    console.log(`Observer A received data: ${data}`);
  }
}

class ConcreteObserverB extends Observer {
  update(data) {
    console.log(`Observer B received data: ${data}`);
  }
}

// Subject
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

// Client code
const subject = new Subject();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();

subject.addObserver(observerA);
subject.addObserver(observerB);

subject.notify("Hello, world!"); // Output:
// Observer A received data: Hello, world!
// Observer B received data: Hello, world!

subject.removeObserver(observerA);
subject.notify("Goodbye, world!"); // Output:
// Observer B received data: Goodbye, world!
