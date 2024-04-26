class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// const person1: Person = new Person("Tahir", 52);
// console.log(`Student 1 = ${person1.name}, age = ${person1.age} years.`);

// const person2: Person = new Person("Iqbal", 52);
// console.log(`Student 2 = ${person2.name}, age = ${person2.age} years.`);

// const person3: Person = new Person("Talha", 19);
// console.log(`Student 3 = ${person3.name}, age = ${person3.age} years.`);

// const person4: Person = new Person("Tariq", 54);
// console.log(`Student 4 = ${person4.name}, age = ${person4.age} years.`);
class Students extends Person {
  rollNo: string;
  constructor(name: string, age: number, r: string) {
    super(name, age);
    this.rollNo = r;
  }
}
const student1: Students = new Students("Tahir", 52, "123456");
console.log(
  `Student 1 = ${student1.name}, age = ${student1.age} years, Roll No = ${student1.rollNo}`
);
