/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {}

  // 새로운 요소 추가
  push(data: T) {
    this.list.push(data);
  }

  // 요소 제거
  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// 인스턴스 생성
const numberList = new List([1, 2, 3]);
// 반드시 타입 명시 안해줘도 됨
numberList.pop();
numberList.push(4);
numberList.print(); //[ 1, 2, 4 ]

const stringList = new List(["1", "2"]);
stringList.push("hello");
