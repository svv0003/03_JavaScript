// 음식 주문 접수
// const를 이용해서 id 값을 가져올 때
//  id 위치(요소나 태그)를 바라보거나, value 값을 확인할 때는
//  let보다 const를 사용하는 것이 바람직하다.
//  고객이 원하는 메뉴를 주문하는 것은 다양한 선택지가 존재하기 때문에 let 사용!
//  애초에 빈 공간임을 개발자 눈으로 확인하고 싶다면 let menu = ""; 형식 사용 가능!


//  undefined : 초기값 설정을 안 해서 나오는 결과
//  let orders = ""; -> 없는 값으로 인식해서 undefined 결과 방지
let orders = "";
function 주문추가기능() {
  const menu = document.getElementById("menuSelect").value;
  let foodName, price;
  switch (Number(menu)) {
    case 1 : foodName="피자" ; price=15000 ; break;
    case 2 : foodName="치킨" ; price=18000 ; break;
    case 3 : foodName="햄버거" ; price=8000 ; break;
    case 4 : foodName="음료" ; price=3000 ; break;
    default : alert("메뉴를 선택하세요.");
  }
  // 주문 추가
  orders += `${foodName} - ${price}원<br>`;

  // 주문 결과 화면에 표시하기
  document.getElementById("result").innerHTML = orders;
  /*
  document.getElementById("result").innerHTML =`
<h3>주문 목록</h3>
${foodName} : ${price}원
`;
*/
}

function 주문초기화기능() {
  orders="";
  document.getElementById("result").innerHTML = "";
  document.getElementById("menuSelect").value = "";
}

function 주문완료기능() {
  if (orders=="") {
    alert("주문한 메뉴가 없습니다.");
  } else {
    alert("주문이 완료되었습니다.");
    // orders를 지우기 전에 orders 값을 어디로 전송해야 하지 않나?
    orders="";
    // 이중 함수 : 함수 내 다른 함수의 코드를 실행하도록 설계하는 방식
    주문초기화기능();
  }
}