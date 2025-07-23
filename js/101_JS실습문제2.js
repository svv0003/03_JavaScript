const peopleCount = document.getElementById("peopleCount");
function 예산확인하기() {
  const pc = Number(peopleCount.value);
  if (pc >= 4) {
    alert("인원이 많으니까 단체 할인 받자!");
  } else {
    alert("소수 정예로 재밌게 보자!");
  }
}

// 영화 나이 제한
const aInput = document.getElementById("input1");
function 영화등급확인() {
  const age = Number(aInput.value);
  if (age >= 0 && age < 12) {
    alert("전체관람가 영화만 볼 수 있어요");
  } else if (age >= 12 && age < 15) {
    alert("12세 관람가까지 볼 수 있어요");
  } else if (age >= 15 && age < 19) {
    alert("15세 관람가까지 볼 수 있어요");
  } else if (age >= 19) {
    alert("모든 영화를 관람할 수 있어요");
  } else {
    alert("나이를 다시 확인하세요");
  }
}

// 옷차림 추천
const tInput = document.getElementById("input2");
function 옷차림추천() {
  const temp = Number(tInput.value);
  if (temp < 5) {
    alert("패딩과 목도리를 꼭 챙기세요");
  } else if (temp >= 5 && temp < 15) {
    alert("코트나 자켓을 입으세요");
  } else if (temp >= 15 && temp < 25) {
    alert("가디건이나 얇은 겉옷을 챙기세요");
  } else {
    alert("반팔, 반바지로 시원하게");
  }
}

// 시험 점수 부모님 반응
const sInput = document.getElementById("input3");
function 부모님반응예측() {
  const score = Number(sInput.value);
  if (score >= 90) {
    alert("잘했다 용돈을 올려주마");
  } else if (score >= 80 && score < 90) {
    alert("조금만 더 열심히 하렴");
  } else if (score >= 70 && score < 80) {
    alert("통학은 못하겠구나");
  } else if (score >= 60 && score < 70) {
    alert("공기 좋은 곳 가고 싶어서 그러니?");
  } else if (score < 60) {
    alert("공장이나 알아보려무나");
  } else {
    alert("점수를 확인하세요");
  }
}

// 쿠폰 적용 금액
const mInput = document.getElementById("input4");
function 쿠폰적용금액() {
  const money = Number(mInput.value);
  if (money < 10000) {
    alert("결제 금액 : 원래 금액");
  } else if (money >= 10000 && money < 30000) {
    alert("결제 금액 : 원래 금액의 10% 할인");
  } else if (money >= 30000 && money < 50000) {
    alert("결제 금액 : 원래 금액의 20% 할인");
  } else if (money >= 50000) {
    alert("결제 금액 : 원래 금액의 30% 할인");
  } else {
    alert("결제 금액을 확인하세요");
  }
}

// 운동 강도 추천
const wInput = document.getElementById("input5");
function 운동강도추천() {
  const weight = Number(wInput.value);
  if (weight > 0 && weight < 30) {
    alert("가벼운 스트레칭");
  } else if (weight >= 30 && weight < 60) {
    alert("적당한 운동량");
  } else if (weight >= 60 && weight < 120) {
    alert("고강도 운동");
  } else if (weight >= 120) {
    alert("휴식 필요");
  } else {
    alert("운동 시간을 확인하세요");
  }
}
