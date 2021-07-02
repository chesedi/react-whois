export {};

// 함수 오버라이드 사용시 예
function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: string, size: number): string[];
function makeArray(
  ddefaultValue: number | string,
  size: number | string
): Array<number | string> {
  const arr: Array<number | string> = [];
  for (let i = 0; i < size; i++) {
    arr.push(ddefaultValue);
  }
  return arr;
}

// const arr1 = makeArray(1, 10);
// const arr2 = makeArray("empty", 10);

// 제네릭 사용예

function makeArray2<T>(ddefaultValue: T, size: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(ddefaultValue);
  }
  return arr;
}

const arr1 = makeArray2<number>(1, 10);
const arr2 = makeArray2<string>("empty", 10);
const arr3 = makeArray2(true, 10);

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

// type T1 = keyof Person;
function swapProperty<T extends Person, K extends keyof Person>(
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Korean = {
  name: "홍길동",
  age: 23,
  liveInSeoul: true,
};

const p2: Korean = {
  name: "김삿갓",
  age: 22,
  liveInSeoul: false,
};

swapProperty(p1, p2, "age");
