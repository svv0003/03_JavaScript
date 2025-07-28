// 입력된 이름이 한글 2~5글자가 맞는지 확인하기

const inputName = document.getElementById("inputName");
const nameResult = document.getElementById("nameResult");

// inputName 입력되었을 경우 input의 경우 e.target.value 필수!
inputName.addEventListener("input", (e) => {
  // input 이벤트 : 입력과 관련된 모든 행동
  // 하지만 컴퓨터는 어떤 키로 입력했는지를 알 수 없다.
  // 입력된 값 얻어오기
  const val = e.target.value; // 이벤트가 발생한 요소의 값 가져오기

  // 아무것도 입력하지 않은 경우
  if (val.trim().length==0) {
    nameResult.textContent = "입력된 값이 없습니다.";
    nameResult.style.color = "#333";
    return;
  }
  // 조건에 맞는 정규표현식 객체 생성
  const regExp = /^[가-힣]{2,5}$/;

  // 정규식객체.test(문자열) : 문자열이 정규식에 일치하면 true 아니면 false
  if (regExp.test(val)) {   // 소비자가 입력한 값이 [가-힣] 이내, 2-5글자가 맞다면
    nameResult.textContent = "유효한 이름 형식입니다.";
    nameResult.style.color = "white";
  } else {
    nameResult.textContent = "유효하지 않은 이름 형식입니다.";
    nameResult.style.color = "pink";
  }
})

const inputPhone = document.getElementById("inputPhone");
const phoneResult = document.getElementById("phoneResult");

inputPhone.addEventListener("input", (e) => {
  const value = e.target.value;

  // const regExp = /010-\d{4}-\d{4}/;
  const regExp = /^01[01679]-\d{3,4}-\d{4}$/;
  // 앞자리는 010, 011, 016, 017, 019 가능
  // - 다음에 오는 \d 숫자는 3자리 또는 4자리만 가능
  // - 다음에 오는 \d 숫자는 4자리만 가능
  // /^ 정규식 시작   정규식 종료 $/

  if (regExp.test(value)){
    phoneResult.textContent = "유효한 번호 형식입니다.";
    phoneResult.classList.add("check");
    phoneResult.classList.remove("uncheck");
  } else {
    phoneResult.textContent = "유효하지 않은 번호 형식입니다.";
    phoneResult.classList.add("uncheck");
    phoneResult.classList.remove("check");
  }
})