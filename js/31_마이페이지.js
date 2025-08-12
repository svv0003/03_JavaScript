$(function(){
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
  
  // 화면에 사용자 정보 표시하기
  $("#user-name").text(user.name);
  $("#user-email").text(user.email);

  $("#logout-btn").click(logoutFn);
})

// 로그아웃
function logoutFn(){
  sessionStorage.removeItem("loggedInUser");
  alert("로그아웃 되었습니다.");
  window.location.href = "31_로그인.html";
}