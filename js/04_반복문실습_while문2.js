let total = 0;
let orderMenu = "";
let running = true;

function order() {
  let choice = document.getElementById("choice").value;

  while(running) {
    switch (Number(choice)) {
      case 1 : orderMenu+="아메리카노 "; total+=3000; break;
      case 2 : orderMenu+="라떼 "; total+=4000; break;
      case 3 : orderMenu+="카푸치노 "; total+=4500; break;
      case 0 : if (orderMenu !== "") {
          alert("주문이 완료되었습니다.");
          document.getElementById("result").innerHTML = `주문이 완료되었습니다!<br>주문: ${orderText}<br>총액: ${total}원`;
        } else {
          document.getElementById("result").innerHTML = "주문한 메뉴가 없습니다!";
        } break;
      default : alert("잘못된 번호입니다."); break;
      }
      break;
    }
  if (orderMenu !== "") {
    document.getElementById("result").innerHTML = `현재 주문: ${orderMenu}<br>총액: ${total}원`;
  }
  document.getElementById("choice").value = "";
}
