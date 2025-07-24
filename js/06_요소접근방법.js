function readValue() {
  const input = document.getElementById("user-input");
  const msg = input.value;

  if (msg.trim() === "") {
    // trim() ; 메세지에서 스페이스바를 포함해서 공백 모두 제거
    return; // 메세지 보내기를 취소하고 되돌려 보내기
    // function readValue 기능 중지
  }
  const chatBg = document.getElementById("chatting-bg");
  // <p> 태그를 HTML 내부에 추가하겠다.
  const newMsg = document.createElement('p');
  // <p> 태그 내부에 <span>으로 감싼 후 클라이언트가 작성한 msg를 넣겠다.
  newMsg.innerHTML = `<span>${msg}</span>`;

  chatBg.appendChild(newMsg);
  input.value = ""; // 전송 후 입력창에 입력된 값을 지우겠다.
}

/*
내용을 입력하고 Enter를 입력하면 전송되도록 하는 방법은 무엇일까요...
*/