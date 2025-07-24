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
