const colorBox = document.getElementById("colorBox");
const colors = ["red", "blue", "green", "yellow"];
let colorIndex = 0;
colorBox.addEventListener("click", function () {
  this.style.background = colors[colorIndex];
  colorIndex++;
  // colorIndex = (colorIndex + 1) % colors.length;
  if (colorIndex == 4) {
    colorIndex = 0;
  }
});

// 문제 2: 더블클릭으로 크기 변경
/*
1. 요소들 선택하기
const sizeBox = document.querySelector("#sizeBox");
const currentSize = document.querySelector("#currentSize");

2. 크기 배열과 인덱스 변수
const sizes = [100, 150, 200];
let sizeIndex = 0;

3. dblclick 이벤트 리스너 추가
sizeBox.addEventListener("dblclick", function() {
    // 인덱스 증가 (순환)
    // 새로운 크기로 width, height 변경
    // 텍스트 업데이트
});
*/

const sizeBox = document.getElementById("sizeBox");
const currentSize = document.getElementById("currentSize");
let foSize = 100;
sizeBox.addEventListener("dblclick", function () {
  if (foSize == 100) {
    foSize = 150;
  } else if (foSize == 150) {
    foSize = 200;
  } else if (foSize == 200) {
    foSize = 100;
  }
  sizeBox.style.width = foSize + "px";
  sizeBox.style.height = foSize + "px";
  currentSize.innerText = foSize + "px";
});

const textInput = document.getElementById("textInput");
const display = document.getElementById("display");
textInput.addEventListener("input", function () {
  display.textContent = `${textInput.value} - 글자 수 : ${textInput.value.length}`;
});
textInput.addEventListener("keyup", function (e) {
  if (e.key == "Escape") {
    textInput.value = "";
    display.textContent = "글자 수 : 0";
  }
});
