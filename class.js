class Person {
  constructor(name, age, work) {
    this.name = name;
    this.age = age;
    this.work = work;
  }
  sayName() {
    console.log(this.name, this.age, this.work);
  }
}