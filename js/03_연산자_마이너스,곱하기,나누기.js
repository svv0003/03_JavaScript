// 변수 선언

// document(문서) : HTML 문서 파일 안에서 존재하는 메서드 기능들 중에서 . 이 항목을 선택하겠다.
// getElementById : 함수 안에서 메서드 기능으로 document를 사용해야만 호출할 수 있는 기능으로,
//                  이 기능의 역할은 Element = 요소, 태그 내부에 존재하는 것들 중에
//                  개발자가 원하는 id 값이 들어있는 요소 태그의 값을 가져오겠다.

// ("id명칭") : 요소 태그 태부에서 <input id="id명칭">으로 존재하는 태그 내부에 요소를 바라보겠다.

// .value : 바라만 보는 상태에서 input 내부에 클라이언트가 작성한 값을 가져오기 위해서 value를 사용
//          value도 마찬가지로 하위 기능이기 때문에 단독으로 사용 불가능!
//          주로 HTML 내부에 존재하는 값을 가져올 때 사용하는 명칭

// 대소문자 구분할 경우
const ABC = "알파벳 ABC 대문자";
const abc = "알파벳 abc 소문자";

console.log(ABC);
console.log(abc);

// 대문자로 변수명을 작성하는 경우는 상수라는 의미! (개발자들 간의 약속)
// 주로 DB연결, Email 아이디 인증키와 같은 설정은 대문자로 작성
// 개발자, 소비자가 작성한 값을 주고 받는 역할을 하는 변수명은 소문자로 작성

// 함수 내부에서 공통으로 사용하는 변수명은 맨 위에 작성

// script가 포함된 HTML 문서 내부에서 input1이라고 작성된 id를 포함한 태그를 바라보겠다를 설정

function minusFn() {
  // value의 값은 반드시 function 기능 내부에서 가져오기를 작성해야 한다
  // 왜? HTML 화면에 보여지는 순간 value의 기본 값은 0
  // 우리가 원하는 value 값은 소비자가 작성한 값을 원하는 것이기 때문에
  // 마이너스 버튼을 클릭하지 전까지 소비자가 value 값을 작성할 시간을 주어야 한다
  // 소비자가 작성을 모두 완료했다면 원하는 계산기 버튼을 클릭해서 계산결과 값을 확인할 수 있도록 해야 한다
  const val1 = num1.value;
  const val2 = num2.value;

  // input의 기본 타입은 text라서 형변환 필수
  result.innerText = Number(val1)-Number(val2);
}

function multiFn() {
  const val1 = Number(num1.value);
  const val2 = Number(num2.value);
  result.innerText = val1*val2;
}
function divFn() {
  result.innerText = Number(num1.value)/Number(num2.value);
}
function modFn() {
  const val1 = Number(num1.value);
  const val2 = Number(num2.value);
  result.innerText = val1%val2;
}