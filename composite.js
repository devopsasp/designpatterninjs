// Abstract Component class
class Component {
  operation() {
    throw new Error("Method must be implemented.");
  }
}

// Leaf Node class
class Leaf extends Component {
  constructor(name) {
    super();
    this.name = name;
  }

  operation() {
    console.log(`Leaf ${this.name} operation`);
  }
}

// Composite Node class
class Composite extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  operation() {
    console.log(`Composite ${this.name} operation`);
    for (const child of this.children) {
      child.operation();
    }
  }
}

// Client code
const root = new Composite("Root");
const leaf1 = new Leaf("Leaf 1");
const leaf2 = new Leaf("Leaf 2");
const leaf3 = new Leaf("Leaf 3");

root.add(leaf1);
root.add(leaf2);

const subcomposite = new Composite("Subcomposite");
subcomposite.add(leaf3);

root.add(subcomposite);

root.operation();
