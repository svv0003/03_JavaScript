// JS 객체
// - {K:V, K:V, K:V...}
// - (중요!) Key는 무조건 문자열(string)
//    -> "Key", 'key', key (따옴표를 작성하지 않아도 JavaScript는 String으로 인식한다!)
// - Key는 기본적으로 오름차순으로 정렬된다. (short, ASC)
// ??? 그럼 value는 사용자가 입력한 값에 따라 다른가 ???

// {} 객체 생성 + 다루기
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  // 1. 객체 생성
  // const product = {};  <- 비어있는 객체 생성
  const 제품 = {
    productName: "갤럭시북4프로",
    productBrand: "Samsung",
    price: 200000,
  };
  console.log(제품);

  // 2. 객체 내 key 값을 이용해서 원하는 value 값을 가져오기
  // 2-1. 객체명.key
  console.log(제품.productName, 제품.productBrand, 제품.price);
  // 2-2. 객체명["key"]
  console.log(제품["productName"], 제품["productBrand"], 제품["price"]);
  // 아래보단 위 방식을 많이 사용한다!
  // 역할은 동일하지만 위 방식에 비해서 아래 방식은 많이 사용하지 않는다!

  // 3.객체에 K:V 추가
  // Value 리터럴 값은 하나가 아닌 [] 리스트 목록 형태도 가능하다.
  제품.color = ["black", "red", "green"];
  제품.storage = ["256GB", "512GB", "1TB"];
  // 3-1. 객체명.key = value;
  // 3-2. 객체명["key"] = value;
  console.log(제품);
  console.log(제품.color[1]);
  제품.price = 180000;
  console.log(제품);

  // 4. 원하는 K:V 삭제하기 (delete 연산자 사용)
  // delete 객체명.key
  delete 제품.productName; // productName 삭제
  console.log("delete 이후 제품 : ", 제품);
});

// 함수 내 메소드 존재
// 함수 기능은 단독 사용 가능하지만 메소드 기능은 단독 사용 불가
//                          -> 객체와 함께 사용해야 함

// ----------------------------------------------
// method(메소드)

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  const 스마트폰 = {}; // <- 비어있는 객체 생성
  스마트폰.모델명 = "아이폰16프로맥스";
  스마트폰.가격 = 1000000;

  // 메소드(객체의 기능(함수)) 추가
  스마트폰.정보 = function () {
    const 브랜드 = "사과";
    // this 참조 변수
    // - 작성되는 위치에 따라서 의미가 다르다.
    // ex) <button onclick="테스트기능(this)">
    //     -> 이때 this는 클릭된 요소(=버튼)
    // ex) 객체명.메소드명 = function(){this.변수명="값";}
    //     -> 이때 this는 메소드가 작성된 객체
    console.log("모델명 : ", this.모델명);
    // console.log("모델명 : ", 모델명);    <- this 없어서 오류 발생
    console.log("가격 : ", this.가격);
    // console.log("가격 : ", 가격);       <- this 없어서 오류 발생
    console.log("브랜드t : ", this.브랜드);
    console.log("브랜드 : ", 브랜드);
  };

  // 메소드 기능 수행하기
  // 어디서든 정보() 기능을 수행했을 때 내용이나 행동을 확인할 수 있는 것이 아니라
  //  스마트폰이라는 내부에 존재하는 기능을 수행하기 위해서는
  //  스파트폰 객체 내부에 존재하는 정보() 기능을 호출하겠다와 같은 형식으로 사용
  스마트폰.정보();

  // 정규식.test("소비자가 작성한 값을 확인하기") = true / false로 일치하는지 확인

  // 1번 방법
  // 정규식 = {
  //   test = function() {
  //      boolean 값으로 확인할 수 있는 코드 작성
  //   }
  // }

  // 2번 방법
  // 정규식 = {};
  // 정규식.test = function() {
  //      boolean 값으로 확인할 수 있는 코드 작성
  // }

  // 1번 방법이나 2번 방법을 활용해서 메소드를 생성하고 나면... 아래와 같이 호출된다.
  // 정규식.test();

  // if(개발자가원하는정규식.test(소비자가작성한값확인)){
  //   // 개발자가원하는정규식 == 소비자가작성한값확인
  //   // true일 경우에만 실행
  // }
});

// 생성자 함수
// 1. 생성자 함수 선언 + 정의
// (중요!) 생성자 함수명은 무조건 "대문자"로 시작한다.
// 영어 이외에 한글도 가능하고, 영문 소문자도 가능하지만 대문자로 작성하는 것이 개발자간의 예의이다.
// Java에서는 대문자로 주로 사용될 것!!

// 학생 객체 생성자 함수
function Student(name, grade, classRoom, number, score) {
  // 속성
  // 전달 받은 값(parameter, 매개변수, 리터럴)을 현재 객체(this)에 속성으로 추가한다.
  // 현재 속성에  = 값 추가
  // this.속성  = 값;
  this.name = name;
  this.grage = grade;
  this.classRoom = classRoom;
  this.number = number;
  this.score = score;

  // 기능(메소드)
  this.intro = function () {
    console.log(`
    ${this.grage}학년
    ${this.classRoom}반
    ${this.number}번
    ${score}점입니다.
    `);
  };
  this.intro();
}

// 생성자 함수 호출
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", () => {
  const st1 = new Student("홍길동", 3, 5, 17, 80);
  console.log(st1);
  const st2 = new Student("박세원", 1, 3, 10, 90);
  console.log(st2);
});

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
  // JS 객체 생성
  const obj = { id: "test1", pw: "1234", number: 9999 };

  // 1. JS 객체를 JSON 문자열로 반환하기
  const str = JSON.stringify(obj);

  console.log("obj : ", obj);
  console.log("str : ", str);

  // JS 객체 생성
  // VM1368:1 Uncaught SyntaxError:
  // const str2 = { id : "test1", pw : "1234", number : 9999 };   <- JSON 형태는 홀따옴표, Key 쌍따옴표 필수!
  const str2 = '{ "id": "test1", "pw": "1234", "number": 9999 }';

  // 1. JSON 문자열을 JS 객체로 반환하기
  const obj2 = JSON.parse(str2);

  console.log("str2 : ", str2);
  console.log("obj2 : ", obj2);

  // 서버 데이터 비동기 요청
  /*
  fetch("API_URL")                        : 웹 API로 HTTP 요청을 보냄
                                            비동기 처리 상태로 네트워크 요청이 왼료되면 Response 객체 제공한다.
  .then((response) => response.json())    : fetch에서 URL 주소로 접속해서 요청을 성공적으로 받으면 실행된다.
                                            주로 URL 주소에서는 JSON() 형태로 데이터 존재한다.
                                            이 데이터를 JSON -> JavaScript 객체로 변환한다.
  .then((result) => result.response.데이터) : result - 변환된 JavaScript 객체 데이터를 저장한다.
                                            result 내부에서 원하는 값에 접근해서 원하는 데이터만 출력한다.
                                            반드시 fetch .then .then 형식이 종료된 이후에 맨 마지막에 ; 붙여주기
                                            fetch;는 절대 금지!!!!!!!!

  전체 흐름 :   API 요청      -> 응답 받기    ->      JSON 변환     ->      데이터 출력
              fetch           .then              .then                console.log
  */                      
  fetch(
    "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=fC0CJR9Lmwp3VfoLcND3XVFDW7FKGuTMECDT6TZD3aE7q4XUVL6PYscpePWfKNMwh0p6ZUt%2FmOm5xGbckoRGCQ%3D%3D&returnType=JSON&numOfRows=100&pageNo=1&searchDate=2024-01-22&InformCode=PM10"
  )
    .then((response) => response.json())
    .then((result) => console.log(result.response.header.resultMsg));
});
