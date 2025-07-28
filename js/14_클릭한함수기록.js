// 클릭한 숫자를 10글자까지 기록하기

const numbers = document.querySelectorAll(".number");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

// numbers[i].addEventListener("click", function () {
//    result.textContent += this.textContent;     -> function을 사용할 때는 this 사용 가능, numbers[i]를 this로 대신 작성 가능
// numbers[i].addEventListener("click", () => {
//    result.textContent += e.target.textContent; -> function이 없기 때문에 this 사용 불가, addEventListener 앞 요소 명칭을 직접 작성해야 함
// numbers[i].addEventListener("click", e => {
//    result.textContent += e.target.textContent; -> function이 없기 때문에 this 사용 불가, 요소 명칭 대신 e.target 직접 작성해야 함

/*
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (result.textContent.length == 10) {
      alert("10글자까지만 입력 가능");
      return;
    }
    result.textContent += this.textContent;
  });
}
*/

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (result.textContent.length == 10) {
      alert("10글자까지만 입력 가능");
      return;
    }
    result.textContent += e.target.textContent;
  });
}

resetBtn.addEventListener("click", (e) => {
  result.textContent = "";
});
