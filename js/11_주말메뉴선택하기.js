const menuResult = document.getElementById("menuResult");
const selectBtn = document.getElementById("selectBtn");
const menu = ["곱창", "김밥", "제육", "돈까스", "파스타", "라면", "삼겹살", "카레", "불고기", "피자", "치킨", "쌀국수", "감자탕", "닭가슴살"];

selectBtn.addEventListener("click", function(){
  let randomNum = Math.floor(Math.random() * menu.length);
  menuResult.textContent = menu[randomNum];
})