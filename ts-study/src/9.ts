export {};

// 조건부 타입
// T extends U ? X : Y
// Omit(내장타입)

type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

interface Person {
  name: string;
  age: number;
  nation: string;
}

type T1 = Omit<Person, "nation" | "age">;

type Overwrite<T, U> = { [P in Exclude<keyof T, keyof U>]: T[P] } & U;

interface Person {
  name: string;
  age: number;
}

type T2 = Overwrite<Person, { age: string; nation: string }>;
const p: T2 = {
  name: "mike",
  age: "23",
  nation: "korea",
};
