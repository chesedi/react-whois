export {};

// mapped type

// type T1 = { [K in "prop1" | "prop2"]: boolean };

interface Person {
  name: string;
  age: number;
}

type MakeBoolean<T> = { [P in keyof T]?: boolean };
const pMap: MakeBoolean<Person> = {};
pMap.name = true;
pMap.age = false;

type T1 = Person["name"];
type Readonly<T> = { readonly [P in keyof T]: T[P] };
type Partial<T> = { [P in keyof T]?: T[P] };
type T2 = Partial<Person>;
type T3 = Readonly<Person>;

type Pick<T, K extends keyof T> = { [P in K]: T[P] };

interface Person {
  name: string;
  age: number;
  language: string;
}

type T4 = Pick<Person, "name" | "language">;

interface Person {
  name: string;
  age: number;
  language: string;
}

type Record<K extends string, T> = { [P in K]: T };
type T5 = Record<"p1" | "p2", Person>;
type T6 = Record<"p1" | "p2", number>;

enum Fruit {
  Apple,
  Banana,
  Oranage,
  Oranage2,
}

const FRUIT_PRICE: { [key in Fruit]: number } = {
  [Fruit.Apple]: 1000,
  [Fruit.Banana]: 1000,
  [Fruit.Oranage]: 1000,
  [Fruit.Oranage2]: 1500,
};
