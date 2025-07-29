const fetchPost = document.getElementById("fetchPost");
const result = document.getElementById("result");
const content = document.getElementById("content");

// html에서의 button type은 submit 아니라 button 형태로 type을 맞춰주는 것이 바람직하다.
fetchPost.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json()) // json 형태로 변환
    .then((data) => {
      console.log("data : ", data);
      content.innerHTML = `
      <strong>userID : </string>${data.userId}<br><br>
      <strong>id : </string>${data.id}<br><br>
      <strong>title : </string>${data.title}<br><br>
      <strong>body : </string>${data.body}
      `;
    });
});
