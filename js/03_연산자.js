// 변수 선언
// document(문서) : HTML문서(파일) 내에서
// get           : 가져오다, 얻다
// Element       : HTML 요소
// ById          : 아이디가 일치하는
// => HTML 문서 내에서 () 내 아이디가 일치하는 요소를 얻어 오겠다.
//                                              + input 내에서 작성한 값

function plusFn() {
  const number1 = document.querySelector("#input1").value;
  const number2 = document.getElementById("input2").value;
  alert("number1의 값은 " + number1); // 글자와 숫자 사이에 +를 작성하면 이어붙이기!
  alert("number2의 값은 " + number2); // 코드 실행 중간에 문제 발생하면 문제를 건너뛰는 것이 아니라 문제 발생한 지점에서 실행을 멈춤
  // alert("두 수의 합은 " + (number1 + number2));
  // input 요소에 작성된 값은 무조건 문자열(String) 형태
  // => 더했을 때 이어쓰기가 되는 문제가 발생한다.
  // [해결방안]
  // 문자열(String)을 숫자(number)형태로 변경하는 방법을 수행
  // 데이터 파싱 (data parsing) : 데이터의 종류를 바꿈
  // 숫자만 작성된 문자열을 진짜 숫자로 바꾸는 방법 : Number("123") => 숫자 123 변경
  alert("두 수의 합은 " + (Number(number1) + Number(number2)));
  console.log(Number(number1) + Number(number2));
  // 두 수의 합을 id가 "계산결과"인 요소(결과 변수)의 내부글자(innerText, HTML 요소 내용)로 대입하기
  // 1) HTML 코드 안에서 <> 태그 내부에 id 값으로 계산결과가 작성된 태그 찾기
  // 2) 찾은 태그를 const result 라는 변수 이름으로 값을 담아주기
  // 3) result.innerText로 수의 합을 저장해서 사용자 화면에 보여주기
  // result 뒤에는 소비자가 작성한 값이 아니고, 우리가 더해준 계산결과가 들어가야 하기 때문에 .value를 붙이지 않음
  const result = document.getElementById("계산결과");
  result.innerText = Number(number1) + Number(number2);
}

function minusFn() {
  const number1 = document.querySelector("#input1").value;
  const number2 = document.getElementById("input2").value;
  alert("number1의 값은 " + number1);
  alert("number2의 값은 " + number2);
  alert("두 수의 차는 " + (Number(number1) - Number(number2)));
  console.log(Number(number1) - Number(number2));
  const result = document.getElementById("계산결과");
  result.innerText = Number(number1) - Number(number2);
}

function multiFn() {
  const number1 = document.getElementById("input1").value;
  const number2 = document.getElementById("input2").value;
  alert("number1의 값은 " + number1);
  alert("number2의 값은 " + number2);
  alert("두 수의 곱은 " + Number(number1) * Number(number2));
  console.log(Number(number1) * Number(number2));
  const result = document.getElementById("계산결과");
  result.innerText = Number(number1) * Number(number2);
}

function divFn() {
  const number1 = document.getElementById("input1").value;
  const number2 = document.getElementById("input2").value;
  alert("number1의 값은 " + number1);
  alert("number2의 값은 " + number2);
  alert("두 수의 나눈 값의 몫은 " + Number(number1) / Number(number2));
  console.log(Number(number1) / Number(number2));
  const result = document.getElementById("계산결과");
  result.innerText = Number(number1) / Number(number2);
}

function modFn() {
  const number1 = document.getElementById("input1").value;
  const number2 = document.getElementById("input2").value;
  alert("number1의 값은 " + number1);
  alert("number2의 값은 " + number2);
  alert("두 수의 나눈 값의 나머지는 " + (Number(number1) % Number(number2)));
  console.log(Number(number1) % Number(number2));
  const result = document.getElementById("계산결과");
  result.innerText = Number(number1) % Number(number2);
}

// const로 변수를 선언하면 값을 바꿀 수 없으므로 let으로 변수 선언하기!
let count1 = 0;
let count2 = 0;
let count1_1 = 0;
let count2_1 = 0;

const num2 = document.getElementById("result2");
const num3 = document.getElementById("result3");
const num2_1 = document.getElementById("result2-1");
const num3_1 = document.getElementById("result3-1");
function 전위증가버튼() {
  num2.innerHTML = ++count1;
  num2_1.innerHTML = ++count1_1;
}
function 전위감소버튼() {
  num2.innerHTML = --count1;
  num2_1.innerHTML = --count1_1;
}
function 후위증가버튼() {
  num3.innerHTML = ++count2;
  num3_1.innerHTML = count2_1++;
}
function 후위감소버튼() {
  num3.innerHTML = --count2;
  num3_1.innerHTML = count2_1--;
}