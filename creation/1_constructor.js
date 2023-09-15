class Person {
  name;
  surname;

  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  main() {
    return `${this.name} ${this.surname}`;
  }
}

const person = new Person("John", "Smith");

console.log(person.main());
