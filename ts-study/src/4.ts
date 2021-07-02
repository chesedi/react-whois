export {};

// interface Person {
//   readonly name: string;
//   age: number;
//   [key: string]: string | number;
// }

// const p1: Person = {
//   name: "mike"
//   age: '22'
// };

interface YearPriceMap {
  [year: number]: number;
  [year: string]: string | number;
}

const yearMap: YearPriceMap = {};
yearMap[1988] = 1000;
// yearMap[1988] = "111";

// interface GetText {
//   (name: string, age: number): string;
// }
type GetText = (name: string, age: number) => string;

class Person {
  constructor(public name: string, public age: number) {}
}

const person = new Person("홍길동", 23);
console.log(person.name, person.age);
