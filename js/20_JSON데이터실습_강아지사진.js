const randomDog = document.getElementById("randomDog");
const result = document.getElementById("result");
const content = document.getElementById("content");

randomDog.addEventListener("click", () => {

  content.innerHTML="<div class='loading'>귀여운 강아지를 찾는중...</div>";

  fetch("https://api.thedogapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      console.log("data : ", data);
      content.innerHTML = `
    <strong>id : </strong>${data[0].id}<br><br>
    <strong>url : </strong>${data[0].url}<br><br>
    <img src="${data[0].url}" alt="귀여운 강아지" class="dog-image">
    `;
    });
});

/**
 * parse() json() 메소드 차이
 * 
 * JSON.parse()
 * - JavaScript의 내장 메소드
 * - JSON 문자열을 JavaScript 객체로 변환
 * - 동기적 처리
 * 
 * (JSON.json() ==)
 * response.json()
 * - FetchAPI의 Response 객체 메소드
 * - URL 응답 본분을 JSON으로 받아서 JavaScript 객체로 변환
 * - 비동기적 처리
 * 
 * 
 * 동기 비동기 차이
 * 
 * 동기 : 은행 번호표 업무처럼 순차적으로 시작하고 종료 (직렬 업무 형태)
 * 
 * 비동기 : 식당에서 주문하고 음식을 받아서 먹기 전까지 기다리기만 하는 것이 아니라 다른 업무를 가능 (병렬 업무 형태)
 * 
 */



/** */    // TODO 코드를 작성해야 하거나, 코드 설명, 코드 내용 포함 주석
/* */     

