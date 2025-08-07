/**
 * 첫번째 사례
 */

// 제네릭의 타입 변수를 여러개 선언 가능
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);
// 제네릭이 하나 일 때 : a에 string을 넣어서 T의 타입이 string이 되서 오류가 남

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
  // unknown 타입의 값에 배열 인덱스를 쓰지마!
  // data: T[] => 이렇게 하면 오류가 안남

  // data: [T, ...unknown[]] :
  // 데이터의 타입이 튜플
  // 첫번째 타입이 T, 다음 요소들은 몰라도 됨(unknown)
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "hello", "mynameis"]);
// "hello"

/**
 * 세번째 사례
 */

interface InterfaceA {
  length: number;
}

interface InterfaceB extends InterfaceA {}

// extends를 사용해 타입 변수의 조건을 달아 제한 가능
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

// let var4 = getLength(10);
