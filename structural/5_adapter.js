// this pattern we can use for refactoring

class Calculator1 {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }

  sub() {
    return this.a - this.b;
  }
}

class Calculator2 {
  sum(a, b) {
    return a + b;
  }

  sub(a, b) {
    return a - b;
  }
}

class Adapter {
  constructor(a, b, type) {
    this.a = a;
    this.b = b;
    this.type = type;
  }

  action() {
    switch (this.type) {
      case "sum":
        return this.a + this.b;
      case "sub":
        return this.a - this.b;
      default:
        return NaN;
    }
  }
}

const calculate = new Adapter(1111, 222, "su");
console.log(calculate.action());
