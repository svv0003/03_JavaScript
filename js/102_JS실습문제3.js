const colorBox = document.getElementById("colorBox");
const colors = ["red", "blue", "green", "yellow"];
let colorIndex = 0;
colorBox.addEventListener("click", function () {
  colorBox.style.background = colors[colorIndex];
  colorIndex++;
  // colorIndex = (colorIndex + 1) % colors.length;
  if (colorIndex == 4) {
    colorIndex = 0;
  }
});

const sizeBox = document.getElementById("sizeBox");
const currentSize = document.getElementById("currentSize");
let foSize = 100;
sizeBox.addEventListener("dblclick", function () {
  sizeBox.style.fontSize = `${foSize}px`;
  sizeBox.style.width = auto;
  sizeBox.style.height = auto;
  currentSize.innerText = `(${foSize}+50)px`;
  if (foSize > 200) {
    foSize = 100;
  }
});

const textInput = document.getElementById("textInput");
const display = document.getElementById("display");
let count = 0;
textInput.addEventListener("keyup", function(){
  ++count;
  
  display.innerText = `글자 수 : ${count}`;
})
