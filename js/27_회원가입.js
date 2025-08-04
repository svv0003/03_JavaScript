const idCheck = document.getElementById("idCheck");

idCheck.addEventListener("click", () => {
  const width = 500;
  const height = 300;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;

  const options = `
width=${width},
height=${height},
left=${left},
top=${top},
`;

  window.open("28_아이디중복확인.html", "_blank", options);
});
