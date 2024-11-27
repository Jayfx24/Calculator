const container = document.querySelector(".cal-buttons");
const operators = [
  "AC",
  "Del",
  "+/-",
  "/",
  "7",
  "8",
  "9",
  "x",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];
let firstNum = "";
let operator = null;
let secondNum = "";
const screen = document.createElement("div");
const operatorScreen = document.createElement("div");
operatorScreen.id = "operator-screen";

regex = /^[0-9]$/;
function getScreen() {
  screen.className = "screen";
  screen.textContent = "";
  container.appendChild(screen);
}

function getButtons() {
  operators.forEach((item, index) => {
    const newButton = document.createElement("button");
    newButton.id = `operator-${index}`;
    newButton.classList.add("button");
    newButton.textContent = item;
    // console.log(item)

    newButton.addEventListener("click", getContent);
    container.appendChild(newButton);
  });
}

function getContent(event) {
  let value = event.target.textContent;

  if (event.target.tagName === "BUTTON" && value === "AC") {
    screen.textContent = "";
    firstNum = "";
    operator = null;
    secondNum = "";

    return;
  } else if (value === "Del") {
    if (secondNum) {
      secondNum = delButton(secondNum)
    } else if (firstNum) {
      firstNum = delButton(firstNum)
    }
  } else if (value === "+/-") {
    if (secondNum) {
      secondNum = toggleSign(secondNum);
    } else {
      firstNum = toggleSign(firstNum);
    }
  } else if (["x", "/", "-", "+"].includes(value)) {
    if (firstNum && secondNum && operator) {
      // Calculate result of current operation
      firstNum = roundToDecimalPlaces(
        operate(parseFloat(firstNum), parseFloat(secondNum), operator),
        5
      )}
    operator = value;
    operatorScreen.textContent = operator;
  
    screen.textContent = "";
    screen.appendChild(operatorScreen);
    secondNum = ""

    return;
  } else if (firstNum && secondNum && value === "=") {
    const equalValue = roundToDecimalPlaces(
      operate(parseFloat(firstNum), parseFloat(secondNum), operator),
      5
    )
    screen.textContent = equalValue
    firstNum = screen.textContent;
    operator = null
    secondNum = ""
    return;
  }

  if (firstNum.length > 13 || secondNum.length > 13) {
    screen.textContent = "ERROR!!! Press any button to restart";
    firstNum = "";
    operator = null;
    secondNum = "";

    return;
  }
  screen.textContent = "";
  if (screen.textContent.length >= 14) {
    screen.textContent = roundToDecimalPlaces(Num);
    return;
  }

  if (
    !operator &&
    (value.match(regex) || (value === "." && !firstNum.includes(".")))
  ) {
    firstNum += value;
    screen.textContent = firstNum;
    return;
  } else if (
    operator &&
    (value.match(regex) || (value === "." && !secondNum.includes(".")))
  ) {
    secondNum += value;
    screen.textContent = secondNum;
    return;
  }
  if (operator) {
    screen.textContent = secondNum;
  } else {
    screen.textContent = firstNum;
    // secondNum = 
  }
}
function toggleSign(num) {
  if (!num){
    num = "0"
  }
  num =  num * -1;
  screen.textContent = num
  return num;
}

function delButton(num) {
  num = num.slice(0, -1);
  screen.textContent = num;
  return num ;
}

function roundToDecimalPlaces(num, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}

function operate(numberOne, numberTwo, operator) {
  switch (operator) {
    case "+":
      return numberOne + numberTwo;
    case "-":
      return numberOne - numberTwo;
    case "/":
      return numberOne / numberTwo;
    case "x":
      return numberOne * numberTwo;
    case "+/-":
      return;
  }
}

getScreen();
getButtons();
/* round up,
  fix number going bey+ond screen width,
  fix C or change to +/-
   
*/
