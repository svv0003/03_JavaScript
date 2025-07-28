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


const btn3a = document.getElementById("btn3a");
btn3a.addEventListener("click", function(){
  const numbers = [];

  numbers[0]=30;
  numbers[2]=10;
  console.log(numbers);

  // 배열.push(값)  : 배열의 마지막 요소로 값을 추가하는 방식
  numbers.push(40);       // index 2번 째 자리 다음에 40이 추가됨
  console.log(numbers);

  // pow(a,b)     : a의 b제곱
  numbers.push(pow(2,4)); // ==numbers.push(16);
  // push 또는 index[idx]를 이용해서 값을 추가할 때 함수로 만든 기능을 활용해서 숫자나 글자 추가할 수 있다.
})

// 전달 받은 수를 x제곱해서 반환하는 방식 (=pow 기능을 표현한 for문)
function pow(num, x) {
  let result = 1;     // 곱했을 때 결과에 영향을 주지 않기 위해 1 초기화

  for(let i=0; i<x; i++){
    result *= num;
  }
  return result;
}


// 화살표 함수
const arrowList = document.querySelectorAll(".arrow");
console.log("arrowList 확인 : ", arrowList);

// 화살표 함수 기본 형태
// arrowList[0].addEventListener("click", function(){})
// ↓
arrowList[0].addEventListener("click", () => {
  alert("화살표 함수 기본 형태 실습");
})

// 매개 변수가 1개인 경우 () 생략 가능
// arrowList[0].addEventListener("click", function(e){})
// ↓
arrowList[1].addEventListener("click", e => {
  // e        : 이벤트 객체(모든 이벤트 관련 정보가 담겨있는 객체)
  // e.target : 이벤트가 발생한 요소
  e.target.style.backgroundColor = "hotpink";
});

// return 한 줄인 경우 {} 생략 가능
// arrowList[0].addEventListener("click", function(e){})
// ↓
arrowList[2].addEventListener("click", e => {
  const input1 = Number(prompt("첫 번째 값 "));
  const input2 = Number(prompt("두 번째 값 "));
  alert("매개 변수가 1개인 경우", input1 + input2);})

// return 한 줄인데 object 반환하는 경우 {} 생략 불가
// arrowList[0].addEventListener("click", function(e){})
// ↓
arrowList[3].addEventListener("click", e => alert("매개 변수가 1개인 경우"))
