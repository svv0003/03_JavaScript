const lottoButton = document.getElementById("lottoButton");
const lottoResult = document.getElementById("lottoResult");
const listDelete = document.getElementById("listDelete");
let lotto = [];
let count = 0;

lottoButton.addEventListener("click", function(){
  ++count;
  while (lotto.length < 6) {
    let num = Math.floor(Math.random() * 45) + 1;
    if (lotto.indexOf(num) == -1) {
      lotto.push(num);
    }
  }
  lotto.sort((a, b) => a - b);
  // alert(lotto);
  lottoResult.innerHTML += `${count}번 : ${lotto}<br>`;
  lotto = [];
});

listDelete.addEventListener("click", function(){
  lottoResult.textContent = "";
  count = 0;
});
