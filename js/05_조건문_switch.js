// 계절 판별 함수
function 계절체크기능() {
  const month = document.getElementById("monthSelect").value;
  const resultDiv = document.getElementById("seasonResult");
  switch (Number(month)) {
    case 3:
    case 4:
    case 5:
      resultDiv.innerText = "봄";
      break;
    case 6:
    case 7:
    case 8:
      resultDiv.innerText = "여름";
      break;
    case 9:
    case 10:
    case 11:
      resultDiv.innerText = "가을";
      break;
    case 12:
    case 1:
    case 2:
      resultDiv.innerText = "겨울";
      break;
    default:
      resultDiv.innerText = "월을 선택하세요";
  }
}

// 커피 종류 함수
function 커피주문기능() {
  const coffee = document.getElementById("coffeeSelect").value;
  const coResult = document.getElementById("coffeeResult");
  let price;
  switch (coffee) {
    case "americano":
      menu = "아메리카노";
      price = 2000;
      설명 = "고소한 맛";
      break;
    case "latte":
      menu = "라떼";
      price = 3500;
      설명 = "부드러운 맛";
      break;
    case "cappuccino":
      menu = "카푸치노";
      price = 3800;
      설명 = "달콤한 맛";
      break;
    case "mocha":
      menu = "모카";
      price = 4200;
      설명 = "진한 초콜릿 맛";
      break;
    case "macchiato":
      menu = "마키아토";
      price = 4500;
      설명 = "오묘한 맛";
      break;
    default:
      coResult.innerHTML = "메뉴를 선택하세요";
  }
  // ${} : 템플릿 리터럴  (변수 삽입 문법)
  //       ES6부터 제공되는 문법
  //       ``(백틱, 역따옴표) 안에 사용하고자 하는 변수를 작성할 때 ${} 내부에 변수명 작성
  // ex)   coResult.innerHTML=`${price}`;
  // ex)   coResult.innerHTML=`주문하신 메뉴는 ${price}원이고, ${설명}이 특징입니다.`;
  coResult.innerHTML = `<pre>메뉴 : ${menu}
가격 : ${price}원
설명 : ${설명}이 특징입니다.</pre>`;
}
