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
    e.target.value = "";
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
    pwResult.textContent =
      "영어 대소문자, 숫자, 특수문자(!@#$%^&*) 포함 8~20글자 작성하세요.";
    e.target.value = "";
    pwResult.classList.remove("check", "error");
    checkList["inputPw"] = false;
    checkPw기능();
    return;
  }
  if (regExpPw.test(valPw)) {
    pwResult.textContent = "유효한 비밀번호 형식입니다.";
    pwResult.classList.add("check");
    pwResult.classList.remove("error");
    checkList["inputPw"] = true;      // 비밀번호 형식이 일치한다면 위 작성한 checkList에서 inputPw에 해당하는 boolean을 true로 변경하겠다.
  } else {
    pwResult.textContent = "유효하지 않은 비밀번호 형식입니다.";
    pwResult.classList.add("error");
    pwResult.classList.remove("check");
    checkList["inputPw"] = false;
  }
  checkPw기능();
});

// 굳이 위에도 checkPw기능을 넣는 이유가?


inputPwCheck.addEventListener("input", checkPw기능);

function checkPw기능() {
  // trim() : 문자열 좌우에서 공백을 제거하는 메소드(함수=기능)
  const pwVal = inputPw.value.trim();
  const pwCheckVal = inputPwCheck.value.trim();
  if (pwVal.length == 0 || pwCheckVal.length == 0) {
    pwCheckResult.textContent = "비밀번호를 먼저 입력해주세요.";
    // pwCheckResult.style.background = "배경색";    2순위 형식의 style css
    // pwCheckResult의 class 명칭을 추가하거나 제거하겠다. 4순위 style css
    // 태그 명칭 옆에 class 명칭을 지우겠다. check와 error를 제거하겠다.
    pwCheckResult.classList.remove("check", "error");
    checkList["inputPwCheck"] = false;
    return;
  }

  if (pwVal == pwCheckVal) {
    pwCheckResult.textContent = "비밀번호가 일치합니다.";
    pwCheckResult.classList.add("check");
    pwCheckResult.classList.remove("error");
    checkList["inputPwCheck"] = true;
  } else {
    pwCheckResult.textContent = "비밀번호가 일치하지 않습니다.";
    pwCheckResult.classList.add("error");
    pwCheckResult.classList.remove("check");
    checkList["inputPwCheck"] = false;
  }
}

inputName.addEventListener("input", (e) => {
  const valName = e.target.value;

  if (valName.trim().length == 0) {
    nameResult.textContent = "한글 2~15글자 작성하세요.";
    e.target.value = "";
    nameResult.classList.remove("check", "error");
    checkList["inputName"] = false;
    return; // 제대로 작성 안 했으니까 아래 항목을 사용할 수 없도록 돌려보내기 설정
  }
  if (regExpName.test(valName)) {
    nameResult.textContent = "유효한 이름 형식입니다.";
    nameResult.classList.add("check");
    nameResult.classList.remove("error");
    checkList["inputName"] = true;
  } else {
    nameResult.textContent = "유효하지 않은 이름 형식입니다.";
    nameResult.classList.add("error");
    nameResult.classList.remove("check");
    checkList["inputName"] = false;
  }
});

btn.addEventListener("click", (e) => {
  if (checkList.inputId == false) {
    e.preventDefault();
    alert("아이디가 유효하지 않습니다.");
    inputId.focus();
    return;
  } else if (checkList.inputPw == false) {
    e.preventDefault();
    alert("비밀번호가 유효하지 않습니다.");
    inputPw.focus();
    return;
  } else if (checkList.inputPwCheck == false) {
    e.preventDefault();
    alert("비밀번호 확인이 유효하지 않습니다.");
    inputPwCheck.focus();
    return;
  } else if (checkList.inputName == false) {
    e.preventDefault();
    alert("이름이 유효하지 않습니다.");
    inputName.focus();            // 제출 방지 : button type이 submit일 때 주로 사용
    return;
  }

  // 회원가입 버튼을 클릭했을 때 성별 체크를 했는지 확인하도록 gender 위치를 버튼 내에 작성
  const gender = document.querySelector("[name='gender']:checked");
  if (gender == null) {
    alert("성별을 선택해주세요");
    return;
  }

  // 모든게 true, 회원가입이 완료되면
  alert("회원가입이 완료되었습니다.");
  signupForm.submit(); // 회원가입 폼 제출 완료 기능 설정
});
