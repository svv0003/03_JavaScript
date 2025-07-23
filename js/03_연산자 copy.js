function equalFn() {
  const number1 = document.querySelector("#input1").value;
  const number2 = document.getElementById("input2").value;
  const calculate = document.querySelectorAll("select option");
  const result = document.getElementById("계산결과");
  alert("number1의 값은 " + number1);
  alert("number2의 값은 " + number2);
  if ((id = "plus")) {
    alert("두 수의 합은 " + (Number(number1) + Number(number2)));
    console.log(Number(number1) + Number(number2));
    result.innerText = Number(number1) + Number(number2);
  }
  if ((id = "minus")) {
    alert("두 수의 차는 " + (Number(number1) - Number(number2)));
    console.log(Number(number1) - Number(number2));
    result.innerText = Number(number1) - Number(number2);
  }
  if ((id = "multiple")) {
    alert("두 수의 곱은 " + Number(number1) * Number(number2));
    console.log(Number(number1) * Number(number2));
    result.innerText = Number(number1) * Number(number2);
  }
  if ((id = "division")) {
    alert("두 수의 몫은 " + Number(number1) / Number(number2));
    console.log(Number(number1) / Number(number2));
    result.innerText = Number(number1) / Number(number2);
  }
}

let a = "";
let b = "";
function equalFn() {
  const number1 = document.querySelector("#input1").value;
  const number2 = document.getElementById("input2").value;
  const calculate = document.querySelectorAll("select.option");
  const result = document.getElementById("계산결과");
  alert("number1의 값은 " + number1);
  alert("number2의 값은 " + number2);
  if ((id = "plus")) {
    a = "합은";
    b = "+";
  }
  if ((id = "minus")) {
    a = "차는";
    b = "-";
  }
  if ((id = "multiple")) {
    a = "곱은";
    b = "*";
  }
  if ((id = "division")) {
    a = "몫은";
    b = "/";
  }
  alert("두 수의" + a + Number(number1) + b + Number(number2));
  console.log(Number(number1) + b + Number(number2));
  result.innerText = Number(number1) + b + Number(number2);
}
