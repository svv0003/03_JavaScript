const open24PopUp = document.getElementById("open_24popUp");
open24PopUp.addEventListener("click", () => {
  let options = [];
  options.push("width=400");
  options.push("height=600");
  // 팝업창 띄우는 위치 지정
  // 정가운데 위치시키는 방법
  const screen가로 = window.screen.width;
  const screen세로 = window.screen.height;
  // 중앙에 위치시키기 위한 left, top 값 계산
  const left = (screen가로 - 400) / 2;
  const top = (screen세로 - 600) / 2;
  options.push(`left=${left}`);
  options.push(`top=${top}`);
  // 배열명.toString() : "요소,요소,요소" 를 , 구분자로 해서 하나의 문자열로 변환하는 메소드
  window.open("24_팝업창.html", "_blank", options.toString());
});

const open25StopWatch = document.getElementById("open_25stopWatch");
open25StopWatch.addEventListener("click", () => {
  let options = [];
  options.push("width=500");
  options.push("height=700");
  // 팝업창 띄우는 위치 지정
  // 정가운데 위치시키는 방법
  const screen가로 = window.screen.width;
  const screen세로 = window.screen.height;
  // 중앙에 위치시키기 위한 left, top 값 계산
  const left = (screen가로 - 500) / 2;
  const top = (screen세로 - 700) / 2;
  options.push(`left=${left}`);
  options.push(`top=${top}`);
  // 배열명.toString() : "요소,요소,요소" 를 , 구분자로 해서 하나의 문자열로 변환하는 메소드
  window.open("25_스톱워치.html", "_blank", options.toString());
});
