const menuResult = document.getElementById("menuResult");
const selectBtn = document.getElementById("selectBtn");
const menu = ["곱창", "김밥", "제육", "돈까스", "파스타", "파스타", "라면", "삼겹살", "카레", "불고기", "피자", "치킨", "쌀국수", "감자탕", "닭가슴살"];

// Math : JS에서 수학적 계산을 위해 제공되는 내장 객체
// 내장객체 : JS 개발팀이 추가적으로 만든 객체 기능
//          따로 설치할 필요 없이 맨 첫글자를 대문자로 작성!

// .random()    : 0 이상 1 미만의 임의의 소수를 생성
// .floor(숫자)  : 소수점을 버림하여 정수로 만듬 (내림 처리)
// .ceil(숫자)   : 소수점을 버림하여 정수로 만듬 (올림 처리)
// .round(숫자)  : 소수점을 반올림하여 5 이상은 올리고, 5 미만은 버려서 정수로 만듬

selectBtn.addEventListener("click", function(){
  let num = parseInt(Math.random() * menu.length);
  menuResult.innerHTML = menu[num];
})