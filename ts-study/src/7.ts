export {};

// 조건부 타입
// T extends U ? X : Y

type IsStringType<T> = T extends string ? "yes" : "no";
type T1 = IsStringType<string | number>;
type T2 = IsStringType<string> | IsStringType<number>;

type Exclue<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type T1 = ReturnType<() => string>;
function f1(s: string): number {
  return s.length;
}
type T2 = ReturnType<typeof f1>;
