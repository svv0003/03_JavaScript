const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("계산결과");
const option = document.getElementById("select1");

function equalFn() {
  const num1 = Number(number1.value);
  const num2 = Number(number2.value);
  const option1 = option.value;
  if (option1 === "plus") {
    result.innerHTML = num1 + num2;
  } else if (option1 === "minus") {
    result.innerHTML = num1 - num2;
  } else if (option1 === "multiple") {
    result.innerHTML = num1 * num2;
  } else if (option1 === "division") {
    if (number2 === 0) {
      result.innerHTML = "0으로 나눌 수 없습니다";
    } else {
      result.innerHTML = (num1 / num2);
    }
  }
}


function eqaulFn() {
  const num1 = Number(number1.value);
  const num2 = Number(number2.value);
  const option2 = option.value;
  switch (option2) {
    case plus : result.innerHTML = num1 + num2 ; break;
    case minus : result.innerHTML = num1 - num2 ; break;
    case multiple : result.innerHTML = num1 * num2 ; break;
    case division : result.innerHTML = num1 / num2 ; break;
    default : result.innerHTML = "입력을 확인하세요" ;
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