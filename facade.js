// Subsystem classes
class CPU {
  freeze() {
    console.log("CPU: Freezing...");
  }

  jump(address) {
    console.log(`CPU: Jumping to address ${address}...`);
  }

  execute() {
    console.log("CPU: Executing...");
  }
}

class Memory {
  load(address, data) {
    console.log(`Memory: Loading data '${data}' into address ${address}...`);
  }
}

class HardDrive {
  read(address) {
    console.log(`HardDrive: Reading data from address ${address}...`);
    return "Data from hard drive";
  }
}

// Facade class
class Computer {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  startComputer() {
    this.cpu.freeze();
    const data = this.hardDrive.read("Boot Address");
    this.memory.load("Boot Address", data);
    this.cpu.jump("Boot Address");
    this.cpu.execute();
  }
}

// Client code
const computer = new Computer();
computer.startComputer();
