const cv1 = document.getElementById("comValue1");
const cv2 = document.getElementById("comValue2");
const result1 = document.getElementById("result1");
function 비교기능1번() {
  const v1 = cv1.value;
  const v2 = Number(cv2.value);
  result1.innerText = v1 === v2;
}
// =    : equal        대입하다, 할당하다
// ==   : equal        값이 같다
// ===  : strict equal 값과 자료형이 같다
// "5" == 5  => true
// "5" === 5 => false