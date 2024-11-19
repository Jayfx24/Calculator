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



function getScreen() {
  let screen = document.createElement("div");
  screen.className = "screen";
  screen.textContent = '|';
  container.appendChild(screen);
}
function getButtons() {

  operators.forEach((item,index) => {
    const newButton = document.createElement("button");
    newButton.id = `operator-${index}`;
    newButton.classList.add('button')
    newButton.textContent = item;

    container.appendChild(newButton);

  })
  
}

function operate(numberOne, numberTwo, operator) {
  switch (operator) {
    case "+":
      return numberOne + numberTwo;
    case "-":
      return numberOne - numberTwo;
    case "/":
      return numberOne / numberTwo;
    case "*":
      return numberOne * numberTwo;
  }
}
getScreen();
getButtons();

console.log(operate(2, 5, "/"));
