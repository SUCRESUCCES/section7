/**
 * 프로미스
 */

// promise는 제네릭 클래스를 기반으로 타입이 선언되어있기 때문에
// 타입 변수로 비동기 처리의 결과값의 타입을 정의해줄 수는 있지만
// 실패했을 때(reject)의 타입을 정해줄 수 없다

// 타입 변수 정의를 하지않으면 기본적으로 비동기 작업 처리의 결과값이
// unknown 타입으로 추론됨

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //resolve(20);
    reject("~ 때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20 'response'은(는) 'unknown' 형식
});

promise.catch((err) => {});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

// 1. 타입변수 직접 정의 (Promise가 클래스여서 타입으로 활용 가능)
// return new Promise<Post>((resolve, reject) => {
// 2. 함수의 반환값 타입으로 설정 (추천)
// function fetchPost(): Promise<Post> {

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
