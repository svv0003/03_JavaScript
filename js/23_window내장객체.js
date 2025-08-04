const open24PopUp = document.getElementById("open_24popUp");
open24PopUp.addEventListener("click", () => {
  let options = [];
  options.push("width=400");
  options.push("height=600");
  // 팝업창 띄우는 위치 지정
  options.push("left=500");
  options.push("top=100");
  // 배열명.toString() : "요소,요소,요소" 를 , 구분자로 해서 하나의 문자열로 변환하는 메소드
  window.open("24_팝업창.html", "_blank", options.toString());
});
