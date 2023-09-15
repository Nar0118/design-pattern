class Simple {
  constructor() {}

  plan() {
    // written a logic
  }
}

class Premium {
  constructor() {}

  plan() {
    // written a logic
  }
}

class Standard {
  constructor() {}

  plan() {
    // written a logic
  }
}

class Factory {
  constructor(type = "simple") {
    this.type = type;
  }

  main() {
    switch (this.type) {
      case "simple":
        // written logic from Simple class
        break;
      case "premium":
        // written logic from Premium class
        break;
      case "standard":
        // written logic from Standard class
        break;
      default:
        break;
    }
  }
}
