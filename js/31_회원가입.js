// const $ = document.querySelector();
// const $$ = document.querySelectorAll();


$(function(){
  $("#signup-btn").click(signFn);

})


function signFn(){
  const userName = $("#userName").val();
  const userEmail = $("#userEmail").val();

  // user은 문자열이 아닌 배열(리스트) 형태
  const user = {
    // local 저장 key 변수명 : JS 입력 값을 담은 value 변수명
    name: userName,
    email: userEmail,
  }

  // 웹사이트에 사용자 정보를 저장할 때 문자열로 변환해서 저장
  localStorage.setItem("userInfo", JSON.stringify(user));

  alert("회원가입이 완료되었습니다. 로그인된 상태로 마이페이지로 이동합니다.")
  
  // session 스토리지에 로그인 정보 저장
  sessionStorage.setItem("loggedInUser", JSON.stringify(user));
  
  // 로그인 완료되면 마이페이지 이동
  window.location.href = "31_마이페이지.html";

}
