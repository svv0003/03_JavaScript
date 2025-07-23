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

function 계산하기(연산자) {
  const n1 = Number(document.getElementById("숫자1").value);
  const n2 = Number(document.getElementById("숫자2").value);
  const culResult = document.getElementById("계산결과");

  // 만약에 ~~ 이 값이 진실이라면!
  if (연산자 == "+") {
    culResult.innerHTML = n1 + n2;
  } else if (연산자 == "-") {
    culResult.innerHTML = n1 - n2;
  } else if (연산자 == "*") {
    culResult.innerHTML = n1 * n2;
  }
}

function 이미지크기조절1(크기) {
  // javaScript 내에서 작성하는 스타일은 2순위 스타일이기 때문에 사용 지양한다.
  document.getElementById("조절이미지1").style.width = 크기;
}

function 이미지크기조절2(가로, 세로) {
  // javaScript 내에서 작성하는 스타일은 2순위 스타일이기 때문에 사용 지양한다.
  document.getElementById("조절이미지2").style.width = 가로;
  document.getElementById("조절이미지2").style.height = 세로;
}

function 글자스타일변경(색상, 크기, 굵기) {
  document.getElementById("스타일텍스트").style.color = 색상;
  document.getElementById("스타일텍스트").style.fontSize = 크기;
  document.getElementById("스타일텍스트").style.fontStyle = 굵기;
  // fontStyle  : 기울이기 어떤 디자인으로 꾸며줄 지 설정
  // fontWeight : 폰트의 굵기 100(얇음)~900(두꺼움)
  //              400 - 일반적인 폰트 두께
  //              700 - bold 두께
}

function 시간보여주기() {
  // 현재 시간 정보를 가져오는 명령
  // Number : 추후에 만들어진 데이터 타입
  //          -> 단순히 숫자로 만들고 싶은 문자열 외부를 Number()라는 글자로 작성하고 ()괄호로 감싸주면 되는 역할
  // Date : 다양한 정보와 기능을 담고 있는 설계도
  //        -> new를 사용해서 JS개발자가 제공하는 기능 중에 현재 JS 사용하는 개발자가 필요한 기능만 작성해서 사용한다는 것
  // 변환/계산할 때는 new 명칭을 사용하지 않음
  // 새로운 복잡한 것을 만들 때는 new 명칭 사용
  // getMont()는 0부터 시작하게끔 배치하기 때문에 +1을 붙여주는 것이 관례
  let now = new Date();
  document.getElementById("시간표시").innerHTML =
    new Date.getFullYear() +
    "년" +
    (now.getMonth()+1) +
    "월" +
    now.getDate() +
    "일" +
    now.getHours() +
    "시" +
    now.getMinutes() +
    "분";
}

let view = true;
const toggle = document.getElementById("토글박스");
function 토글기능() {
  if (view == true) {
    toggle.style.display = "none";
    view = false;
  } else {
    toggle.style.display = "block";
    view = true;
  }
}

function 게임체크(선택색상) {
  if (선택색상 == "red") {
    document.getElementById("게임결과").innerHTML = " 정답입니다";
  } else {
    document.getElementById("게임결과").innerHTML = "틀렸습니다";
  }
}
