/*
모든 js파일명.js확장자명
          *.js 파일 내부를 <script> 태그 내부라고 보면 됨
어떤 특정 js파일 명칭인지 알 수 없으므로 * 어떠한 이라는 표기를 작성한 것임

 */

function externalFn() {
  alert("HTML 외부 파일에 작성된 externalFn() 함수 기능이 호출되었습니다.");
}

/* JS 맛보기 */
// 버튼 클릭 시 body 태그의 글자색, 배경색을 변경

const body = document.querySelector("body"); // 웹 페이지 문서 내에서 선택할 것(바디
// 버튼에 장착된 기능을 실행하면 다크모드로 바꾸는 기능(함수) 설정
// 위 버튼에서 전달받은 어떤 색상이 변수이름에 담겨지고, 담겨진 색상이 글자 또는 배경색으로 변경된다
function 다크모드() {
  body.style.color = "white"; // body 태그 안에 존재하는 스타일에서 글자 색상을 흰색으로 변경하겠다.
  body.style.backgroundColor = "black"; // body 태그 안에 존재하는 스타일에서 배경 색상을 검은색으로 변경하겠다.
}
function 라이트모드() {
  body.style.color = "black";
  body.style.backgroundColor = "white";
}
function 블루모드() {
  body.style.color = "yellow";
  body.style.backgroundColor = "blue";
}
function 핑크모드() {
  body.style.color = "blue";
  body.style.backgroundColor = "pink";
}

