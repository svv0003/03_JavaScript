const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const passwordResult = document.getElementById("password-result");

passwordConfirm.addEventListener("keyup", function (e) {
  let pw1 = password.value.trim();
  let pw2 = passwordConfirm.value.trim();
  if (e.key == "Enter") {
    // pw1.trim()
    // password.value === ""  똑같은 의미
    // trim() = 스페이스바로 작성한 띄어쓰기 글자취급 X
    // 공백 제거 후 비밀번호 입력했는지 확인
    if (pw1.length == 0 || pw2.length == 0) {
      alert("비밀번호를 입력하세요.");
    } else if (pw1 == pw2) {
      alert("비밀번호가 일치합니다.");
      passwordResult.innerText = `비밀번호 입력값 : ${pw1}, 길이 : ${pw1.length}
      비밀번호 확인값 : ${pw2}, 길이 : ${pw2.length}`;
    } else {
      alert("비밀번호가 다릅니다.");
      passwordResult.innerText = `비밀번호 입력값 : ${pw1}, 길이 : ${pw1.length}
      비밀번호 확인값 : ${pw2}, 길이 : ${pw2.length}`;
    }
  }
});
