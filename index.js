console.log("Hello world!");

class Test {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return "hello " + this.name;
  }
}
let obj = new Test("John");
console.log(obj.__proto__ === Test.prototype); // true
console.log(obj.__proto__.__proto__ === Object.prototype); // true
console.log(obj.__proto__.__proto__.__proto__ === null); // true
