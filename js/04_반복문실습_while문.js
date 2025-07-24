// 음식 주문 접수
// const를 이용해서 id 값을 가져올 때
//  id 위치(요소나 태그)를 바라보거나, value 값을 확인할 때는
//  let보다 const를 사용하는 것이 바람직하다.
//  고객이 원하는 메뉴를 주문하는 것은 다양한 선택지가 존재하기 때문에 let 사용!
//  애초에 빈 공간임을 개발자 눈으로 확인하고 싶다면 let menu = ""; 형식 사용 가능!

//  undefined : 초기값 설정을 안 해서 나오는 결과
//  let orders = ""; -> 없는 값으로 인식해서 undefined 결과 방지
let orders = "";
let orderCount = 0;
let pizzaCount = 0;
let chickenCount = 0;
let burgerCount = 0;
let drinkCount = 0;
function 주문추가기능() {
  const menu = document.getElementById("menuSelect").value;
  let foodName, price;
  switch (Number(menu)) {
    case 1:
      foodName = "피자";
      price = 15000;
      ++pizzaCount;
      break;
    case 2:
      foodName = "치킨";
      price = 18000;
      ++chickenCount;
      break;
    case 3:
      foodName = "햄버거";
      price = 8000;
      ++burgerCount;
      break;
    case 4:
      foodName = "음료";
      price = 3000;
      ++drinkCount;
      break;
    default:
      alert("메뉴를 선택하세요.");
  }
  // 주문 추가
  // ++orderCount는 주문을 추가한 상태에서 현재 주문이 어디까지 추가됐는지 바로 확인 가능
  // orderCount++는 주문을 추가하기 전 단계가 확인되서 사용하지 않는다.
  orders += `${++orderCount}번 : ${foodName} - ${price}원<br>`;

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
  orders = "";
  orderCount = 0;
  pizzaCount = 0;
  chickenCount = 0;
  burgerCount = 0;
  drinkCount = 0;
  document.getElementById("result").innerHTML = "";
  document.getElementById("menuSelect").value = "";
}

function 주문완료기능() {
  if (orders == "") {
    alert("주문한 메뉴가 없습니다.");
  } else {
    alert("주문이 완료되었습니다.");
    // orders를 지우기 전에 orders 값을 어디로 전송해야 하지 않나?
    orders = "";
    // 이중 함수 : 함수 내 다른 함수의 코드를 실행하도록 설계하는 방식
    주문초기화기능();
  }
}

let tryCount = 0;
const pw = parseInt(Math.random() * 8999 + 1001); // 임의의 4자리 수 비밀번호 생성하기
const pwShow = document.getElementById("pwShow");
pwShow.addEventListener("click", function () {
  alert(pw);
});
function 비밀번호체크() {
  let pwTry = Number(document.getElementById("비밀번호입력").value);
  if (pwTry == "" || pwTry < 1000) {
    alert("비밀번호를 제대로 입력하세요.");
  } else {
    // == 양 옆이 일치할 경우 true
    // != 양 옆이 일치하지 않을 경우 true
    if (pwTry != pw) {
      // prompt() : 값을 입력할 수 있는 alert() 창 같은 존재
      //            확인, 취소 버튼 존재
      //            입력창에 작성해서 값을 전송하는 방식
      // while문 속에서 prompt()의 취소 버튼은 의미 없다
      //  -> if (password == null); {
      //        document.ElementById("결과창").innerHTML = "로그인 취소";
      //        return;   => 더 이상 아래 코드 실행하지 않고 돌려보내는 기능
      //     }
      alert("입력한 비밀번호가 틀렸습니다.");
      pwTry = null;
    } else {
      alert("입력한 비밀번호가 맞습니다.");
      document.getElementById("결과창").innerHTML = `<h6>비밀번호 찾기 성공!</h6>`;
    }
  }
}
