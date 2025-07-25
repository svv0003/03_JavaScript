const lotteryNumber = document.getElementById("lotteryNumber");
const delete = document.getElementById("delete");
const lottoList = document.getElementById("lottoList");
let lotto = [];
lotteryNumber.addEventListener("click", function(){
    while (lotto.length<6) {
        let num = parseInt(Math.random()*45+1);
        if (lotto.indexOf(num) == -1) {
            lotto.push(num);
        }
    }
    alert(lotto);
    lottoList.innerHTML += `${lotto}<br><br>`;
})
