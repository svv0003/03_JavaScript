const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const calculateBtn = document.getElementById("calculatorBtn");
const calcResult = document.getElementById("calc-result");

calculateBtn.addEventListener("click", function () {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);
  const op = operator.value;

  if (num1.value == "" || num2.value == "") {
    alert("숫자를 입력하세요");
  } else {
    if (op == "+") {
      result = number1 + number2;
    } else if (op === "-") {
      result = number1 - number2;
    } else if (op === "*") {
      result = number1 * number2;
    } else if (op === "/") {
      if (number2 == 0) {
        calcResult.textContent = "0으로 나눌 수 없습니다";
      } else {
        result = number1 / number2;
      }
    }
  }
  calcResult.textContent = `${number1} ${op} ${number2} = ${result}`;
});
/*
    switch (op) {
      case "+": result = number1 + number2; break;
      case "-": result = number1 - number2; break;
      case "*": result = number1 * number2; break;
      case "/":
        if (number2 == 0) {
          calcResult.textContent = "0으로 나눌 수 없습니다.";
          return;
        } else {
          result = number1 / number2;
          break;
        }
      }
      calcResult.textContent = `${number1} ${op} ${number2} = ${result}`;
    }
});
*/

const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = document.getElementById("shopping-list");
let items = [];

function addItem() {
  const itemName = itemInput.value.trim();

  if (itemName === "") {
    alert("상품명을 입력하세요.");
    return;
  }

  items.push(itemName);

  let listText = "🛒 쇼핑 목록:\n\n";
  for (let i = 0; i < items.length; i++) {
    listText += `${i + 1}. ${items[i]}\n`;
  }
  shoppingList.textContent = listText;

  itemInput.value = "";
  itemInput.focus();
}

addBtn.addEventListener("click", addItem);

itemInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});
