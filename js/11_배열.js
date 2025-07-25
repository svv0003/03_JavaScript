// 배열 선언 및 기초 사용법
function check1() {
  // 배열 선언 방법 확인
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ["사과", "바나나", "딸기"];

  // 배열명.length : 배열의 길이 (배열의 칸 수 또는 저장된 데이터의 수)
  console.log("arr1.length : " + arr1.length);
  console.log("arr2.length : " + arr2.length);
  console.log("arr3.length : " + arr3.length);
  console.log("arr4.length : " + arr4.length);

  // 배열의 index(색인, 번호)
  // 배열의 각 칸을 구분하는 번호
  // -> 0부터 시작
  // -> 도중에 생략 불가능 (항상 연속적)
  // -> 마지막 index = 배열명.length - 1
  // 배열명[idx] -> 배열의 해당 인덱스에 존재하는 데이터 반환
  console.log("arr4[0]", arr4[0]);
  console.log("arr4[1]", arr4[1]);
  console.log("arr4[2]", arr4[2]);
  console.log("arr4[3]", arr4[3]);

  // JS 배열 특장 사용법
  // 자료형 제한이 없다. -> 인덱스마다 다른 자료형을 할당 가능하다.
  // 길이 제한이 없다. -> 값을 배열에 원하는 만큼 추가 가능하다.
  // 원하는 인덱스에 값을 맘대로 추가할 수 있다.
  // -> 중간에 건너뛴 배열 칸이 있을 수는 있지만 빈칸으로 인덱스는 포함된다.

  // 배열명[idx] = 값;
  // 배열의 해당 인덱스 칸에 값을 할당
  arr2[0] = 100;
  arr2[1] = "sns";
  arr2[2] = true;
  console.log("arr2 : ", arr2);

  arr1[0] = "가";
  arr1[1] = "나";
  arr1[2] = "다";
  arr1[5] = "마";
  arr1[0] = "사";
  console.log("arr1 : ", arr1);
}
