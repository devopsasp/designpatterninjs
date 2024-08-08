// Strategy interface
class PaymentStrategy {
  pay(amount) {
    throw new Error("Payment strategy must implement pay method");
  }
}

// Concrete strategies
class CreditCardStrategy extends PaymentStrategy {
  constructor(number, expiration) {
    super();
    this.number = number;
    this.expiration = expiration;
  }

  pay(amount) {
    console.log(
      `Paying ${amount} using credit card ${this.number} expiring ${this.expiration}`
    );
  }
}

class PayPalStrategy extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }

  pay(amount) {
    console.log(`Paying ${amount} using PayPal account ${this.email}`);
  }
}

// Context
class PaymentGateway {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  pay(amount) {
    this.strategy.pay(amount);
  }
}

// Client code
const creditCardStrategy = new CreditCardStrategy(
  "1234-5678-9012-3456",
  "12/25"
);
const paypalStrategy = new PayPalStrategy("user@example.com");

const paymentGateway = new PaymentGateway(creditCardStrategy);
paymentGateway.pay(100); // Paying 100 using credit card 1234-5678-9012-3456 expiring 12/25

paymentGateway.setStrategy(paypalStrategy);
paymentGateway.pay(200); // Paying 200 using PayPal account user@example.com
