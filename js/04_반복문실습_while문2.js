let total = 0;
let orderMenu = "";
let running = true;
function order() {
  choice = prompt("추가 주문을 입력하세요.")
  let choice = document.getElementById("choice").value;
  console.log("order 기능 안으로 들어옴");
  while(running) {
    switch (Number(choice)) {
      case 1 : orderMenu+="아메리카노 "; total+=3000; break;
      case 2 : orderMenu+="라떼 "; total+=4000; break;
      case 3 : orderMenu+="카푸치노 "; total+=4500; break;
      case 0 : alert("주문이 완료되었습니다."); running=false; break;
      default : alert("잘못된 번호입니다.");
    }
    document.getElementById("result").innerHTML = orderMenu + total;
    console.log("while 기능 안으로 들어옴");
  }
}
function exit() {
    document.getElementById("choice").value;
}

document.get
