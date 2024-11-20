const container = document.querySelector(".cal-buttons");
const operators = [
  "AC",
  "C",
  "%",
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
  console.log(value);

  if (event.target.tagName === "BUTTON" && value === "AC") {
    screen.textContent = "";
    firstNum = "";
    operator = null;
    secondNum = "";

    return;
  } else if (["x", "/", "-", "+", "%"].includes(value)) {
    operator = value;
    screen.textContent = "";
    return;
  } else if (value === "=") {
    // console.log(firstNum);
    // console.log(operator);
    // console.log(secondNum);
    screen.textContent = operate(
      parseFloat(firstNum),
      parseFloat(secondNum),
      operator
    );
    firstNum = ''
    secondNum = ''
    
    firstNum = screen.textContent
    return;
  }

  if (!operator && (value.match(regex) || value === ".")) {
    firstNum += value;
    screen.textContent = firstNum;
    return;
  } else if (operator && (value.match(regex) || value === ".")) {
    secondNum += value;

    screen.textContent = secondNum;
    return;
  }
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
    case "%":
      return (numberOne * 100) / numberTwo;
  }
}


getScreen();
getButtons();

/* round up,
  fix number going beyond screen width,
  fix C or change to +/-
   
*/