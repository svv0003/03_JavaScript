const btnE = document.getElementById("btn-e");
const btnEvent = document.getElementById("btn-event");
const result1 = document.getElementById("result1");
// 0) function() 괄호 안에 매개변수로 e 또는 event 이외에 무엇을 작성하든 상관 없지만
//    사용하기 편하도록 event 또는 e를 사용하자는 개발자들간의 규칙!!
// 1) e로 작성한 방법
btnE.addEventListener("click", function (e) {
  result1.textContent = `e 사용 - 이벤트 타입 : ${e.type}, 클릭된 요소 : ${e.target.textContent}`;
});
// 2) event로 작성한 방법
btnEvent.addEventListener("click", function (event) {
  result1.textContent = `event 사용 - 이벤트 타입 : ${event.type}, 클릭된 요소 : ${event.target.textContent}`;
});
// e.type(event.type)     : btnE(btnEvent) 변수의 타입
// e.target(event.target) : btnE(btnEvent) 변수의 내용
// target      : 기능이 있는 html 내 함수?
// textContest :
// value : input처럼 클라이언트가 선택해서 입력(작성)해서 개발자에게 전달하는 값

const btnA = document.getElementById("btn-A");
const btnB = document.getElementById("btn-B");
const btnC = document.getElementById("btn-C");
const result2 = document.getElementById("result2");
btnA.addEventListener("click", function (e) {
  result2.textContent = `태그 : ${e.target.tagName}\n내용 : ${e.target.textContent}\nid명칭 : ${e.target.id}\nclass명칭 : ${e.target.className}`;
});
btnB.addEventListener("click", function (event) {
  result2.textContent = `태그 : ${event.target.tagName}\n내용 : ${event.target.textContent}\nid명칭 : ${event.target.id}\nclass명칭 : ${event.target.className}`;
});
btnC.addEventListener("click", function (e) {
  result2.textContent = `태그 : ${e.target.tagName}\n내용 : ${e.target.textContent}\nid명칭 : ${e.target.id}\nclass명칭 : ${e.target.className}`;
});
// textContent 줄바꿈 방법 : /n, <br/> 태그가 아니라 \n 사용하기!!
// -> css로 white-space : pre-line을 추가해야 \n 줄바꿈 작동된다.

const textInput = document.getElementById("text-input");
const numberInput = document.getElementById("number-input");
const selectInput = document.getElementById("select-input");
const result3 = document.getElementById("result3");
// 텍스트 입력이 감지되었을 때 진행할 기능 설정
textInput.addEventListener("input", function (e) {
  result3.textContent = `텍스트 입력값 : ${e.target.value}
글자 수 : ${e.target.value.length}
`;
});
numberInput.addEventListener("input", function (e) {
  result3.textContent = `숫자 입력값 : ${e.target.value}
글자 수 : ${e.target.value.length}
`;
});
selectInput.addEventListener("change", function (e) {
  result3.textContent = `선택된 값 : ${e.target.value}
  선택된 값의 글자수 : ${e.target.value.length}
  선택된 값의 순서 : ${e.target.selectedIndex}`;
});

const loginForm = document.getElementById("login-form");
const userName = document.getElementById("userName");
const userPW = document.getElementById("userPW");
const result4 = document.getElementById("result4");
loginForm.addEventListener("submit", function (e) {
  // .preventDefault();
  // 메소드 = 기능
  // 함수(=기능,행동) 내부에 메소드(=기능,행동)

  // 변수명.메소드(행동기능)함수명칭() = 동사
  // 변수명.명칭 = 명사

  // 반드시 소괄호 붙이기!!! (붙여야 작동한다.)
  // 비밀번호와 비밀번호 확인 일치하는가? 아이디 중복 없는가?
  // 위 처럼 submit 제출 버튼을 클릭해서 제출되기 전에
  // 개발자가 확인해야할 사항을 검토 후 전송하기 위해 제출 일시 정지하는 기능
  e.preventDefault(); // 실제 폼 제출 우선 멈춤
  result4.textContent = `사용자 이름 : ${userName.value}
  사용자 비밀번호 : ${userPW.value}`;
});
