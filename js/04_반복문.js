function check1() {
  for (let num1 = 1; num1 <= 10; num1++) {
    document.getElementById("확인1").innerHTML += num1 + " ";
  }
}

function check2() {
  for (let num2 = 5; num2 <= 10; num2++) {
    document.getElementById("확인2").innerHTML += num2 + " ";
  }
}

function check3() {
  let sum3 = 0;
  for (let num3 = 1; num3 <= 10; num3++) {
    sum3 += num3;
  }
  document.getElementById("확인3").innerHTML = sum3;
}
