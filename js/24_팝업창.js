

const result = document.getElementById("result");

// 부모창 #readValue 작성 값을 얻어와서 #result에 출력하기


// opener : 팝업창을 연 창 (== 부모 창)
//          나를 열어준 부모 창의 DOM (Document HTML 파일 문서)에 접근하거나
//            부모 창의 JavaScript 함수를 실행하는 등 부모 창을 제어할 수 있다.
//          부모 창 = html 파일에서 window.open() 사용해서 팝업창을 여는 창
//          자식 창 = 새로 열린 팝업창 입장에서 나를 만들어 준 부모를 찾아가는 연결고리
//                   opener를 통해 부모 창의 요소의 값을 사용하거나
//                     opener.document.querySelector()로 부모 창의 변수명을 읽을 수 있다.


// jQuery     : .val();
// JavaScript : .value;
const readValue = opener.document.getElementById("readValue").value;

result.textContent = readValue;

// #send 버튼 클릭 시 #자식인풋 값을 얻어와서 부모창 #writeValue 값으로 대입한 후 팝업창 닫기
// id 명칭이나 name 명칭을 한글로 작성할 경우 인식을 못하는 경우가 생길 수 있어서 영어로 작성하는 것을 추천!

const send = document.getElementById("send");
const childInput = document.getElementById("childInput");

send.addEventListener("click", () => {
  opener.document.getElementById("writeValue").value = childInput.value;

  window.close()
})