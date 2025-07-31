/**
 * 제네릭
 */

// 제네릭 함수 : 모든 타입에 두루두루 쓸 수 있는 범용 함수
// <> : 타입 변수
function func<T>(value: T): T {
  return value;
}

// 상황에 따라 다른 타입
// 함수 호출될 때 마다 결정 됨! -> 매개변수의 값에 의해

let num = func(10);
// num.toUpperCase();

if (typeof num === "number") {
  // 타입 좁히기
  num.toFixed();
}

let bool = func(true);

let str = func("string");

let arr = func([1, 2, 3]);

// let arr1 = func([1, 2, 3] as [number, number, number]);
let arr1 = func<[number, number, number]>([1, 2, 3]); // 튜플 값 할당하고 싶을 때
