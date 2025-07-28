// 소비자가 회원가입 시 작성해야 하는 값을 제대로 작성했는지 체크하는 리스트
// 만약 모두 제대로 작성하지 않았다면 false, 제대로 작성 안했다고 처리
// 값을 하나씩 제대로 작성할 때마다 true로 변경한다.

const checkList = {
  inputId: false, //  input 내부에 개발자가 원하는 대로 id 값을 제대로 작성했다면 true
  inputPw: false, //  input 내부에 개발자가 원하는 대로 pw 값을 제대로 작성했다면 true
  inputPwCheck: false, //  input 내부에 위 inputPw와 일치하게 제대로 작성했다면 true
  inputName: false, //  input 내부에 개발자가 원하는 대로 이름을 제대로 작성했다면 true
};

const signupForm = document.getElementById("signupForm");
const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const inputPwCheck = document.getElementById("inputPwCheck");
const inputName = document.getElementById("inputName");
const btn = document.getElementById("btn");
const idResult = document.getElementById("idResult");
const pwResult = document.getElementById("pwResult");
const pwCheckResult = document.getElementById("pwCheckResult");
const nameResult = document.getElementById("nameResult");

const regExpId = /^[A-Za-z0-9\-\_]{6,16}$/;
const regExpName = /^[가-힣]{2,15}$/;
const regExpPw = /^[A-Za-z\d!@#$%^&*]{8,20}$/;
const gender = document.querySelector("[name='gender']:checked");


inputId.addEventListener("input", (e) => {
  const valId = e.target.value;

  if (valId.trim().length == 0) {
    idResult.textContent = "영어, 숫자, -, _ 6~16글자 작성하세요.";
    e.target.addEventListener = "";
    idResult.classList.remove("check", "error");
    checkList["inputId"] = false;
    return;
  }

  if (regExpId.test(valId)) {
    idResult.textContent = "유효한 아이디 형식입니다.";
    idResult.classList.add("check");
    idResult.classList.remove("error");
    checkList["inputId"] = true;
  } else {
    idResult.textContent = "유효하지 않은 아이디 형식입니다.";
    idResult.classList.add("error");
    idResult.classList.remove("check");
    checkList["inputId"] = false;
  }
});


inputPw.addEventListener("input", (e) => {
  const valPw = e.target.value;

  if (valPw.trim().length == 0) {
    pwResult.textContent = "영어 대소문자, 숫자, 특수문자(!@#$%^&*) 포함 8~20글자 작성하세요.";
    e.target.addEventListener = "";
    pwResult.classList.remove("check", "error");
    checkList["inputPw"] = false;
    return;
  }
    if (regExpPw.test(valPw)) {
    pwResult.textContent = "유효한 비밀번호 형식입니다.";
    pwResult.classList.add("check");
    pwResult.classList.remove("error");
    checkList["inputPw"] = true;            // 비밀번호 형식이 일치한다면 위 작성한 checkList에서 inputPw에 해당하는 boolean을 true로 변경하겠다.
  } else {
    pwResult.textContent = "유효하지 않은 비밀번호 형식입니다.";
    pwResult.classList.add("error");
    pwResult.classList.remove("check");
    checkList["inputPw"] = false;
  }
});


inputPwCheck.addEventListener("input", (e) => {
  const valPwCheck = e.target.value;

  if (valPwCheck.trim().length == 0) {
    pwCheckResult.textContent = "비밀번호를 한 번 더 작성하세요.";
    e.target.addEventListener = "";
    pwCheckResult.classList.remove("check", "error");
    checkList["inputPwCheck"] = false;
    return;
  }
    if (regExpPw.test(valPwCheck)) {
    pwCheckResult.textContent = "유효한 비밀번호 형식입니다.";
    pwCheckResult.classList.add("check");
    pwCheckResult.classList.remove("error");
    checkList["inputPwCheck"] = true;
  } else {
    pwCheckResult.textContent = "유효하지 않은 비밀번호 형식입니다.";
    pwCheckResult.classList.add("error");
    pwCheckResult.classList.remove("check");
    checkList["inputPwCheck"] = false;
  }
});