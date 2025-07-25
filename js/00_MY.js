const lotteryNumber = document.getElementById("lotteryNumber");
const listDelete = document.getElementById("listDelete");
const lottoList = document.getElementById("lottoList");
let lotto = [];
let count = 0;

lotteryNumber.addEventListener("click", function () {
  ++count;
  while (lotto.length < 6) {
    let num = parseInt(Math.random() * 45 + 1);
    if (lotto.indexOf(num) == -1) {
      lotto.push(num);
    }
  }
  lotto.sort((a, b) => a - b);
  // alert(lotto);
  lottoList.innerHTML += `${count}번 : ${lotto}<br><br>`;
  lotto = [];
});

listDelete.addEventListener("click", function () {
  lottoList.textContent = "";
  count = 0;
});
