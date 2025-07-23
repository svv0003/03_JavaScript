const num1 = document.getElementById("input1");
// 양수인지 음수인지 0인지 검사하는 기능 설정
function 체크1() {
  const val = Number(num1.value);
  if (val > 0) {
    alert("양수입니다.");
  }
  if (val < 0) {
    alert("음수입니다.");
  }
  if (val == 0) {
    alert("0입니다.");
  }
}

const num2 = document.getElementById("input2");
// 양수인지 음수인지 0인지 검사하는 기능 설정
function 체크2() {
  const val = Number(num2.value);
  if (val > 0) {
    alert("양수입니다.");
  } else if (val < 0) {
    alert("음수입니다.");
  } else {
    alert("0입니다.");
  }
}

const num3 = document.getElementById("input3");
function 체크3() {
  const age = Number(num3.value);
  if (age>=0 && age<14) {
    alert("어린이")
  } else if (age>=14 && age<20) {
    alert("청소년")
  } else if (age>=20 && age<=150) {
    alert("성인")
  } else {
    alert("입력을 확인해 주세요")
  }
}