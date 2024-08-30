import "./style.css";

console.log("abc");

class Animal {
  constructor() {}

  bark() {
    console.log("bark");
  }
}

const dog = new Animal();

dog.bark();

const obj = { name: "John" };
const name = obj?.name ?? "Default";

console.log(name);
