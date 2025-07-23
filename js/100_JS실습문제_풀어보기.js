// 문제1
function 첫번째함수() {
  alert("안녕하세요");
}

// 문제2
function 텍스트변경() {
  const msg = document.getElementById("메세지영역");
  msg.innerText = "새로운 메세지입니다.";
}

// 문제3
function 배경색변경(backColor) {
  // document.querySelector().style.backgroundColor = backColor;
  // document
  //        .querySelector()
  //                       .style
  //                            .backgroundColor = backColor;
  const bodyColor = document.querySelector("body");
  bodyColor.style.backgroundColor = backColor;
  // backColor => 매개변수(parameter)
  // 소비자에게 제한된 범위의 선택권을 제공하는 방식
  // 선택된 버튼의 함수 속 색상(매개변수)이 function 배경색변경 매개변수에 대입
}

// 문제4
function 인사하기() {
  // 변수명 앞에 자료형을 붙여주지 않는다면 전역변수가 되서 function 밖에서도 사용 가능함
  // 되도록 let, const를 붙여주는 것이 좋다.
  let userName = document.getElementById("이름입력").value;
  document.getElementById("인사결과").innerHTML = userName + "님, 안녕하세요";
}

function Inner확인하기() {
  const a = document.getElementById("xInnerHTML");
  const b = document.getElementById("xInnerText");
  a.innerHTML = "<h1>안녕하세요</h1>";
  b.innerText = "<h1>안녕하세요</h1>";
  // innerHTML : 내부에서 HTML 태그를 인식하고 처리한다.
  // innerText : 내부에서 HTML 태그를 인식하지 못해서 오직 순수한 텍스트 값만 다룬다.
}