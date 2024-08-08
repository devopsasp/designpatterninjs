// Real subject class
class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    }
  }
}

// Proxy class
class BankAccountProxy {
  constructor(account) {
    this.account = account;
  }

  deposit(amount) {
    if (amount < 0) {
      console.log("Invalid deposit amount");
    } else {
      this.account.deposit(amount);
    }
  }

  withdraw(amount) {
    if (amount < 0) {
      console.log("Invalid withdrawal amount");
    } else {
      this.account.withdraw(amount);
    }
  }
}

// Client code
const account = new BankAccount(1000);
const proxy = new BankAccountProxy(account);

proxy.deposit(500); // Deposited 500. New balance: 1500
proxy.withdraw(200); // Withdrew 200. New balance: 1300
proxy.deposit(-100); // Invalid deposit amount
proxy.withdraw(-50); // Invalid withdrawal amount
