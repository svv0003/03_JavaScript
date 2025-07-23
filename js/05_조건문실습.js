const money = document.getElementById("input1");
const answer1 = document.getElementById("answer1");
function 잔액확인하기() {
  const 잔액 = Number(money.value);
  if (잔액 >= 5000) {
    answer1.innerText = "나  : 미안 잔액이 없어서 힘들 것 같다.";
  } else {
    answer1.innerText = "나  : 언제까지 돌려줄 수 있는지 알려줘.";
  }
}

const num1 = document.getElementById("input2");
const answer2 = document.getElementById("answer2");
function 홀짝기능() {
  const num2 = Number(num1.value);
  if (num2==0) {
    answer2.innerHTML = "0입니다.";
  } else if (num2%2==0) {
    answer2.innerHTML = "짝수입니다.";
  } else {
    answer2.innerHTML = "홀수입니다.";
  }
}

const input3 = document.getElementById("input3");
const answer3 = document.getElementById("answer3");
function 주행거리계산기능() {
  const amount = Number(input3.value);
  if (amount>=0 && amount<=3) {
    answer3.innerHTML = "기본요금 3천원입니다.";
  }
  else if (amount>3 && amount<=10) {
    answer3.innerHTML = "8천원입니다.";
  } else if (amount>10) {
    answer3.innerHTML = "2만원입니다.";
  } else {
    answer3.innerHTML = "입력을 확인해 주십시오."
  }
}