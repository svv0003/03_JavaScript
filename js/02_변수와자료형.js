// console.log(값)
// 브라우저 콘솔에 괄호() 내부의 값을 기록 출력

console.log(1234);
console.log("문자열은 양 쪽 쌍따옴표를 작성해야 한다.");
// console.log("JS는 홀따옴표도 문자열로 취급한다.");
// alert("5678");

// console.log() alert() 모두 개발자가 값의 문제를 확인하기 위해 작성하는 도구
// alert() = 소비자에게 알림 표시로 나타내기도 하지만 개발자에겐 값에 대한 표기를 확인하는 용도이기도 하다.

//--------------------------------------------
// 변수 선언
// 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// 작성법 => 변수종류 변수명;


var number1;
// 변수에 값을 대입
// 작성된 변수에 값을 대입하는 것
// 작성법 => 변수명 = 값;
number1 = 10;
number1 = 20; // 변수의 값 재할당

let number2 = 20;
number2 = 30; // 변수의 값 재할당

console.log("number1의 값은 " + number1);
console.log("number2의 값은 " + number2);

const number3 = 40;
// number3 = 50;

console.log("number3의 값은 " + number3);

// var의 경우에는 함수(=행동, 기능) 내부에 작성하면 {} 블록의 개념 관계 없이 어디서든 변수이름 호출 가능

function var확인기능() {
  if (true) {
    // ()괄호가 참이라면 중괄호 내부에 존재하는 일(들)을 실행할 것이다.
    var abc = 10; // 보통 이런 식으로 선언할 경우에는 if 중괄호 내부에서만 abc를 사용하고자 하는 의도가 크다.
  }
  abc = 20; // abc는 }를 탈출했기 때문에 사용 불가능하지만 var은 함수 안에 var 변수이름을 작성하면 변수이름 호출이 가능하기 때문에 위험하다.
}

function let확인기능() {
  if (true) {
    let def = 30;
  }
  def = 40; // if 구문을 탈출했기 때문에 def 사용 불가 (var이 예외적인 경우!)
}

function const확인기능() {
  if (true) {

    const ghi = 30;
    ghi = 40;         // ghi 색상은 문제가 발생하는 색상
                      // ghi = 40; 부터는 문제 발생하므로 let xyz = 10;으로
                      // 코드 실행 자체가 불가

    let xyz = 10;
    xyz = 20;         // xyz 색상은 정상적으로 작동하는 색상

  }
}