// 인라인 이벤트 모델 확인
function check1(btn) {
  // 매개변수 : 함수 호출 시 () 내부에 작성된 값을 전달받아 저장하는 함수
  // 매개변수 btn === 클릭한 버튼(this)
  console.log(btn);
  // 버튼의 배경색을 얻어와서 저장
  const bgColor = btn.style.backgroundColor;
  // 처음에는 inline-style로 지정된 배경색이 없어서 "" 빈칸으로 표기됨
  //     <button onclick="check1(this)" style="background-color: yellow">
  // 배경색상으로 yellow를 넣었기 때문에 yellow가 출력된다.
  console.log(bgColor);
  // 버튼이 클릭될 때마다 pink <-> yellow 변경 만들기
  if (bgColor == "yellow") {
    btn.style.backgroundColor = "pink";
  } else {
    btn.style.backgroundColor = "yellow";
  }
}


const test2 = document.getElementById("test2");
/*** 표준 이벤트 모델 작성법 ***/
// 요소.addEventListener("이벤트 종류", 이벤트 핸들러(함수))

// test2라는 id에서 어떤 행동이 감지되면 감지된 행동을 듣고, 행위를 추가할거야!
//                    클릭                        함수
test2.addEventListener("click", function(){
  // 투명도 1(불투명) -> 0(투명) 0.01씩 투명도 줄이기
  let 현재 = test2.style.opacity; // 현재 test2의 투명도 확인
  // 맨 처음에는 투명도 '' -> 1 대입
  if (현재 == '') {
    test2.style.opacity = 1;
    현재 = 1;
  }
  // 투명도 0.1 감소
  test2.style.opacity = 현재 - 0.1;
  if (test2.style.opacity < 0) { // 완전히 투명해졌다면
    test2.style.opacity = 1;  // 다시 불투명하게 만든다.
  }
})



// 만약에 몇 년 뒤에 클릭 기능에 추가적인 기능이 필요한 경우
// -> 아래와 같이 test2 id 명칭으로 기능을 추가해서 작성 가능


// #test2 요소를 클릭하면 클릭 횟수 카운트 생성하기
let count = 0;
test2.addEventListener("click", function(){
  count++;
  // 표준 이벤트 모델의 이벤트 핸들러 안에서 this == 이벤트가 발생한 요소
  this.innerText = count; // 증가한 count 값을 test2 내용으로 대입
})