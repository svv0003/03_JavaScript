// 클릭한 숫자를 10글자까지 기록하기

const numbers = document.querySelectorAll(".number");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (result.textContent.length == 10) {
      alert("10글자까지만 입력 가능");
      return;
    }
    result.textContent += this.textContent;
  });
}

resetBtn.addEventListener("click", (e) => {
  result.textContent = "";
});
