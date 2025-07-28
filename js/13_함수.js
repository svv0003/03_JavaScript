// 매개 변수, 전달 인자
const input1 = document.getElementById("input1");
const btn1 = document.getElementById("btn1");

// ↓
// 자주 사용하는 기능을 분리해서 기능 명칭으로 사용할 수 있다!
// print1(매개 변수, 매개 변수) {}
function print1(num, str) {
  alert(`${num}는 ${str}입니다.`);
}

// btn1 클릭 시 #input1의 값을 읽어와서 print1() 함수를 호출하기
btn1.addEventListener("click", function () {
  const value = input1.value;

  // input1에 값이 입력되지 않았거나 빈칸만 입력된 경우
  if (value.trim().length == 0) {
    // console.log -> 개발자가 문제를 확인하는 수단
    // alert()     -> 소비자가 문제를 확인하는 수단
    console.log("숫자를 입력해주세요.");
    alert("숫자를 입력해주세요.");
    return; // 함수 종료 + 호출한 곳으로 돌아간다!
  }
  console.log("return이 여기까지 오는지 확인");

  let result;
  /*
  if (Number(value)==0) {
    result="0";
  } else if (Number(value)>0) {
    result="양수";
  } else {
    result="음수";
  }
  */
  // 조건식의 결과가 하나인 경우엔 중괄호 {} 생략 가능
  if (Number(value) == 0) result = "0";
  else if (Number(value) > 0) result = "양수";
  else result = "음수";

  // 함수 호출(값 전달)
  // [!!중요!!] 전달되는 값의 순서가 중요하다!!
  // print1(전달 인자, 전달 인자);
  print1(value, result);  // "(숫자)는 양수입니다."
  print1(result, value);  // 순서를 반대로 적용한 경우 -> "양수는 (숫자)입니다."
});


