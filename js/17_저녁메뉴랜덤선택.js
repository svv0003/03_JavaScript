const menuResult = document.getElementById("menuResult");
const selectBtn = document.getElementById("selectBtn");
const menuInput = document.getElementById("menuInput");
const addBtn = document.getElementById("addBtn");
const validationMessage = document.getElementById("validationMessage");
const menuItems = document.getElementById("menuItems");
const menuCount = document.getElementById("menuCount");

const menus = [
  "곱창",
  "김밥",
  "제육볶음",
  "돈까스",
  "파스타",
  "샐러드",
  "라면",
  "삼겹살",
  "카레라이스",
  "불고기",
  "피자",
  "치킨",
  "쌀국수",
  "감자탕",
  "닭가슴살",
];

// 한글, 영어, 숫자 포함 정규식
const menuRegex = /^[가-힣a-zA-Z0-9\s]{2,20}$/;

// 메뉴 목록 화면에 표시
function displayMenus() {
  menuItems.innerHTML = "";
  // forEach() : 각 배열의 요소에 대해 주어진 함수를 한 번씩 실행하는 배열 메소드
  // ex) const 과일들 = ["사과", "바나나", "오렌지"];
  //     내부에 존재하는 과일들을 한 번씩 모두 출력하는 향상된 for문
  // [사용법]
  // 과일들.forEach((과일) => {
  //   // 과일을 한 번씩 꺼냈을 때 실행할 기능, 주로 배열에서 index 대신 가볍게 문자열을 순회하여 출력할 때 많이 사용한다.
  // })
  menus.forEach((menu) => {
    // createElement() : 태그 내부에 추가 태그 및 요소 삽입 가능
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.textContent = menu;
    menuItems.appendChild(menuItem);
  });
  menuCount.textContent = menus.length;
}

// displayMenus() 만들어진 기능을 html 화면이 보이자마자 사용할 수 있도록 호출
displayMenus();

// 메뉴 추가
addBtn.addEventListener(
  "click",
  function () {
    const newMenu = menuInput.value.trim();

    // 1번 빈값 체크하기
    if (newMenu == "") {
      validationMessage.textContent = "메뉴를 입력하세요.";
      validationMessage.className = "validation-message error";
      menuInput.focus();
      return;
    }

    //   if (menuRegex.test(newMenu)) {   } else {
    // 일 때 , else 만 필요할 경우
    // if (menuRegex.test(newMenu)) { -> if (!menuRegex.test(newMenu)) {
    // 정규식과 소비자가 작성한 메뉴입력을 비교했을 때
    // 정규식과 일치하지 않는게 사실이라면 = true로 설정하겠다   맨 앞에 ! 붙여줌
    // 만약에 문제가 존재할 경우
    if (!menuRegex.test(newMenu)) {
      validationMessage.textContent =
        "한글, 영어, 숫자만 포함해서 2~20글자 입력하세요.";
      validationMessage.className = "validation-message error";
      menuInput.focus();
      return;
    }

    if (menus.includes(newMenu)) {
      validationMessage.textContent = "이미 존재하는 메뉴입니다.";
      validationMessage.className = "validation-message error";
      menuInput.focus();
      return; // displayMenus()까지 가지 못하도록 기능 중단할 수 있게 되돌리기
    }

    /*
    // 메뉴명을 잘못 작성한 경우
    if (menuRegex.test(newMenu)) {
      // 중복된 메뉴인 경우
      if (menus.indexOf(newMenu) == -1) {
        menus.push(newMenu);
        menuInput.value = "";
        validationMessage.textContent = `${newMenu} 메뉴가 추가되었습니다.`;
        validationMessage.className = "validation-message success";
      } else {
        validationMessage.textContent = "이미 존재하는 메뉴입니다.";
        validationMessage.className = "validation-message error";
        menuInput.focus();
        return;
      }
    }
    */

    menus.push(newMenu);
    menuInput.value = "";
    validationMessage.textContent = `${newMenu} 메뉴가 추가되었습니다.`;
    validationMessage.className = "validation-message success";
    displayMenus();
  }

  // 2번 정규식 검사 테스트에서 문제 없는 경우
);

// enter 키로 메뉴 추가하기
menuInput.addEventListener("keyup", (e) => {
  if (e.key === "enter") {
  }
});

// 랜덤 메뉴 선택
selectBtn.addEventListener("click", function () {
  if (menus.length == 0) {
    alert("선택할 메뉴가 없습니다.");
    return;
  }
  const randomNumber = parseInt(Math.random() * menus.length);
  console.log("randomNumber : ", randomNumber);
  menuResult.textContent = menus[randomNumber];
});

menuCount.textContent = menus.length;

// className  : HTML 요소 전체 class 속성을 문자열로 다루는 방식, 한 번에 교체할 때 사용
// classList  : HTML 요소의 class들을 개별적으로 관리하는 방식, class를 하나씩 추가/제거/토글 가능
