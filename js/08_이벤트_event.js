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

