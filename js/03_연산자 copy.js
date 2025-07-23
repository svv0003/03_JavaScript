const number1 = Number(document.getElementById("input1").value);
const number2 = Number(document.getElementById("input2").value);
const result = document.getElementById("계산결과");
const option = document.getElementById("select").value;

function equalFn() {
  if (option === "plus") {
    result.innerHTML = number1 + number2;
  } else if (option === "minus") {
    result.innerHTML = number1 - number2;
  } else if (option === "multiple") {
    result.innerHTML = number1 * number2;
  } else if (option === "division") {
    if (number2 === 0) {
      result.innerHTML = "0으로 나눌 수 없습니다";
    } else {
      result.innerHTML = (number1 / number2).toFixed(2); // 소수점 2자리
    }
  }
}

/*
let a;
let b;
let calResult;
const number1 = Number(document.getElementById("input1").value);
const number2 = Number(document.getElementById("input2").value);
const result = document.getElementById("계산결과");
const option = document.getElementById("select").value;
function equalFn() {
  alert("number1의 값은 " + number1);
  alert("number2의 값은 " + number2);
  if (option === "plus") {
    a = "합은";
    b = "+";
    calResult = number1 + number2;
  } else if (option === "minus") {
    a = "차는";
    b = "-";
    calResult = number1 - number2;
  } else if (option === "multiple") {
    a = "곱은";
    b = "*";
    calResult = number1 * number2;
  } else if (option === "division") {
    a = "몫은";
    b = "/";
    if (number2 === 0) {
      result.innerText = "0으로 나눌 수 없습니다";
    }
  }
  result.innerText = calResult;
}
*/