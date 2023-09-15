const grandParent = {
  name: 'John',
  surname: 'Smith',
};

const parent = Object.create(grandParent);

console.log(111111, parent.__proto__);