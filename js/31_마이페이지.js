$(function(){
    // 타이머를 중지시키기 위한 변수 설정
    let timerInterval;
  // session Storage에서 로그인 정보 가져오기
  const sessionLoginUser = sessionStorage.getItem("loggedInUser");

  // 로그인 정보가 없으면 로그인 페이지로 보내기
  if (!sessionLoginUser) {
    alert("로그인 페이지로 이동합니다.");
    location.href = "31_로그인.html";
    // if문 아래 기능들 실행 못하도록 돌려보내기
    return;
  }

  // 로그인 정보가 있으면 유저 정보를 문자열에서 객체로 변환하기
  let user = JSON.parse(sessionLoginUser);
  console.log("user : ", user);

    // 타이머 및 자동 로그아웃 기능 시작
    // 60000 = 1분(밀리초 단위)
    const sessionDuration = 60000;

    timerInterval = setInterval(function(){
      // 현재 시간 생성하기
      const now = new Date().getTime;
      // session에 저장된 로그인 시간 가져오기
      const loginTime = user.loginTime;
      // 현재 시간 - 로그인한 시간 = 경과 시간
      const elapsedTime = now - loginTime;
      // 60000(1분) - 경과 시간 = 남은 시간
      const remainingTime = sessionDuration - elapsedTime;

      // 남은 시간 존재한다면 초 단위로 변환해서 화면에 표시하기
      if (remainingTime > 0) {
        // 남은 시간은 대부분 소수점 아래를 무조건 올림 함수를 사용한다.
        // 예) 대중교통 예정 시간
        const remainingSecond = Math.ceil(remainingTime/1000);
        // #timer에 남은 시간 표시하기
        $("#timer").text(remainingSecond);
      }
      // 시간이 만료되면 타이머 중지 및 로그아웃
      else {
        clearInterval(timerInterval);
        sessionStorage.removeItem("loggedInUser");
        alert("세션이 만료되어 자동으로 로그아웃 되었습니다.");
        window.location.href = "31_로그인.html";
      }
      // 1초마다 반복 시행하기
    },1000);
  
  // 화면에 사용자 정보 표시하기
  $("#user-name").text(user.name);
  $("#user-email").text(user.email);

  $("#logout-btn").click(function(){
    // 실행중인 타이머 중지
    clearInterval(timerInterval);
    // 로그아웃 기능 실행
    logoutFn;
  })
})

// 로그아웃
function logoutFn(){
  sessionStorage.removeItem("loggedInUser");
  alert("로그아웃 되었습니다.");
  window.location.href = "31_로그인.html";
}