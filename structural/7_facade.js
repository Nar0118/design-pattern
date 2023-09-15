// JQuery is the facade

class User {
  constructor() {}

  main() {
    // written a logic
  }
}

class Admin {
  constructor() {}

  main() {
    // written a logic
  }
}

class facade {
  constructor(type) {
    this.type = type;
  }

  main() {
    let person;
    if (this.type === "user") {
      person = new User();
    } else if (this.type === "admin") {
      person = new Admin();
    }
  }
}
