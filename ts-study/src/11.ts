export {};

// 타입 추론(인터페이스)
interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

interface Japanese extends Person {
  liveInTokyo: boolean;
}

const p1: Person = { name: "mike", age: 23 };
const p2: Korean = { name: "mike", age: 23, liveInSeoul: true };
const p3: Japanese = { name: "mike", age: 23, liveInTokyo: true };
const arr1 = [p1, p2, p3];
const arr2 = [p2, p3];
