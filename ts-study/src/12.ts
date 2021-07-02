export {};

// 타입 가드
interface Person {
  type: "person";
  name: string;
  age: number;
}

interface Product {
  type: "product";
  name: string;
  price: number;
}

function print(value: Person | Product) {
  if (value.type === "person") {
    console.log(value.age);
  } else {
    console.log(value.price);
  }

  // in 키워드 사용
  if ("age" in value) {
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}
