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
var Coder = /** @class */ (function () {
    function Coder(name, isProgrammer, city) {
        this.name = name;
        this.isProgrammer = isProgrammer;
        this.city = city;
    }
    return Coder;
}());
var coder = new Coder("Tahir", true, "Lahore");
console.log("\nName: ".concat(coder.name, ",\nIs Programmer: ").concat(coder.isProgrammer, ",\nCity: ").concat(coder.city, "\n"));
