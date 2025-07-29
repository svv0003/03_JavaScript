const randomCat = document.getElementById("randomCat");
const result = document.getElementById("result");
const content = document.getElementById("content");

randomCat.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      console.log("data : ", data);
      content.innerHTML = 
      // 데이터가 {} 중괄호가 아닌 [] 대괄호 형태로 시작하면 대부분 배열, 리스트 목록 형태의 데이터
      // data를 활용할 때는 data[0] 가져오고 싶은 index 번호를 사용
      // 여러 사진이 있는 배열 중 랜덤으로 하나만 선택돼서 idx=[0]으로 찾아야 한다!
      `
      <strong>id : </strong>${data[0].id}<br><br>
      <strong>url : </strong>${data[0].url}<br><br>
      <img src="${data[0].url}" alt="귀여운 고양이" class="cat-image">
      `;
    });
});
