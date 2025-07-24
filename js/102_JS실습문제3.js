const colorBox = document.getElementById("colorBox");
const colors = ["red", "blue", "green", "yellow"];
let colorIndex = 0;
colorBox.addEventListener("click", function(){
colorBox.style.background = colors[colorIndex];
colorIndex++;
  if (colorIndex == 4) { 
    colorIndex = 0;
  }
})


const sizeBox = document.getElementById("sizeBox");
let currentSize = document.getElementById("currentSize");
let foSize = 100;
sizeBox.addEventListener("doubleClick", function(){
sizeBox.style.fontSize = `${foSize}px`;
sizeBox.style.width = auto;
sizeBox.style.height = auto;
currentSize.innerText = `(${foSize}+50)px;
if (foSize>200){
foSize = 100;}
})

const 