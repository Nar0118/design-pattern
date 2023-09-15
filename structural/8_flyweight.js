class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFly {
  constructor() {
    this.cars = [];
  }

  add(model, price) {
    const foundCar = this.getOne(model);
    console.log("foundCar", this.cars);
    if (foundCar) {
      return foundCar;
    }

    const newCar = new Car(model, price);
    this.cars.push(newCar);

    return newCar;
  }

  getOne(model) {
    return this.cars?.find((car) => car.model === model);
  }
}
const obj = new CarFly();
const bmwX6 = obj.add("bmw", 10000);
const honda = obj.add("honda", 4000);
const bmwX5 = obj.add("bmw", 8000);
console.log(bmwX6);
console.log(bmwX5);
console.log(honda);