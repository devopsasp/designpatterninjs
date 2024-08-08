// Handler interface
class Handler {
  setNext(handler) {
    this.next = handler;
  }

  handle(request) {
    if (this.next) {
      this.next.handle(request);
    }
  }
}

// Concrete handlers
class HandlerA extends Handler {
  handle(request) {
    if (request === "A") {
      console.log("Handler A handled the request");
    } else {
      super.handle(request);
    }
  }
}

class HandlerB extends Handler {
  handle(request) {
    if (request === "B") {
      console.log("Handler B handled the request");
    } else {
      super.handle(request);
    }
  }
}

class HandlerC extends Handler {
  handle(request) {
    if (request === "C") {
      console.log("Handler C handled the request");
    } else {
      console.log("No handler found for the request");
    }
  }
}

// Client code
const handlerA = new HandlerA();
const handlerB = new HandlerB();
const handlerC = new HandlerC();

handlerA.setNext(handlerB);
handlerB.setNext(handlerC);

handlerA.handle("A"); // Handler A handled the request
handlerA.handle("B"); // Handler B handled the request
handlerA.handle("C"); // Handler C handled the request
handlerA.handle("D"); // No handler found for the request
