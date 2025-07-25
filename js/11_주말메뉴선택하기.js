const menuResult = document.getElementById("menuResult");
const selectBtn = document.getElementById("selectBtn");
const menu = [
  "치킨",
  "피자",
  "햄버거",
  "족발",
  "보쌈",
  "찜닭",
  "곱창",
  "삼겹살",
  "갈비",
  "회",
  "초밥",
  "파스타",
  "스테이크",
  "중국집",
  "카페",
  "브런치",
];

selectBtn.addEventListener("click", function () {
  let randomNum = Math.floor(Math.random() * menu.length);
  menuResult.textContent = menu[randomNum];
});
