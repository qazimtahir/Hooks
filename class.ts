/*
class Student {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = "Tahir";
    this.age = 25;
  }
}
const st = new Student("Tahir", 52);
// st.name = "Tahir";
// st.age = 52;
console.log(st.name);
console.log(st.age);
console.log(`Name: ${st.name} and age = ${st.age}.`);
*/

// Class in TS

class Coder {
  name: string;
  isProgrammer: boolean;
  city: string;
  constructor(name: string, isProgrammer: boolean, city: string) {
    this.name = name;
    this.isProgrammer = isProgrammer;
    this.city = city;
  }
}

const coder = new Coder("Tahir", true, "Lahore");
console.log(`
Name: ${coder.name},
Is Programmer: ${coder.isProgrammer},
City: ${coder.city}
`);
