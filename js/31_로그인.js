$(function () {
  $("#login-btn").click(loginFn);
});

function loginFn() {
  // localStorage에 저장된 회원가입 정보 가져오기
  const storedUserJSON = localStorage.getItem("userList");

  // 회원가입 정보가 존재하지 않으면 함수 종료
  if (!storedUserJSON) {
    alert("가입된 사용자 정보가 없습니다. 회원가입을 먼저 해주세요.");
    return;
  }

  // 입력한 이메일 값을 html에서 js로 가져오기
  const userEmail = $("#userEmail").val();

  if (!userEmail) {
    alert("이메일을 입력해 주세요.");
    return;
  }

  // 저장된 정보(JSON 문자열)을 객체로 변환하기
  const storedUser = JSON.parse(storedUserJSON);

  // 입력한 이메일과 저장된 이메일을 비교하기
  // 참고 : 추후 DB에 저장된 이메일 데이터와 사용자가 서버로 보낸 이메일의 일치 여부를 백엔드에서 작업 처리 진행한 뒤 프론트엔드로 전달한다.
  //       연결된 DB가 존재하지 않기 때문에 프론트엔드에서 모든 작업 진행힌다.
  if (userEmail === storedUser.email) {
    alert("로그인 성공!");

    // 세션에 저장할 객체에 현재 로그인 시간(타임스탬프) 추가
    const userSession = {
      name: storedUser.name,
      email: storedUser.email,
      // new Data().getTime() : 현재 시간
      loginTime: new Data().getTime(),
    };

    // 웹사이트 session에 자바스크립트에서 작성한 로그인 정보를 저장한다.
    sessionStorage.setItem("loggedInUser", JSON.stringify(userSession));

    // 마이페이지로 이동, 현재 시간 확인하기
    window.location.href = "31_마이페이지.html";
  } else {
    // 로그인 실패
    alert("이메일 정보가 일치하지 않습니다.");
  }
}
