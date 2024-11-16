const container = document.querySelector(".cal-buttons");
const operators = ["AC", "C", "%", "/", "x", "-", "+", "="];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const calButtons =

function getScreen(){
  let screen = document.createElement("div")
  screen.className = "screen"
  container.appendChild(screen)
}
function getButtons() {
  let count = 0;
  for (let i = 0; i < 19; i++) {
    const newButton = document.createElement("button");
    newButton.className = "buttons";
   
    switch (count) {
      case 0:
      case 1:
      case 2:
        newButton.textContent = operators[count];
        newButton.classList.add("operator-btn-2");
        break;
      case 3:
        newButton.textContent = operators[count];
        newButton.classList.add("operator-btn");
        break;
      case 4:
        newButton.textContent = 7;
        newButton.id = "7";
        break;
      case 5:
        newButton.textContent = 8;
        newButton.id = "8";
        break;
      case 6:
        newButton.textContent = 9;
        newButton.id = "9";
        break;

      case 7:
        newButton.textContent = operators[4];
        newButton.classList.add("operator-btn");
        break;
      case 8:
        newButton.textContent = 4;
        newButton.id = "4";
        break;
      case 9:
        newButton.textContent = 5;
        newButton.id = "5";
        break;
      case 10:
        newButton.textContent = 6;
        newButton.id = "6";
        break;

      case 11:
        newButton.textContent = operators[5];
        newButton.classList.add("operator-btn");

        break;
      case 12:
        newButton.textContent = 1;
        newButton.id = "1";
        break;
      case 13:
        newButton.textContent = 2;
        newButton.id = "2";
        break;
      case 14:
        newButton.textContent = 3;
        newButton.id = "3";
        break;
      case 15:
        newButton.textContent = operators[6];
        newButton.classList.add("operator-btn");

        break;
      case 16:
        newButton.textContent = 0;
        newButton.id = "zero";
        break;
      case 17:
        newButton.textContent = '.';
        newButton.id = "decimal";
        break;
      case 18:
        newButton.textContent = operators[7];
        newButton.classList.add("operator-btn");
        break;
    }
    count++;
    container.appendChild(newButton);
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
    case "*":
      return numberOne * numberTwo;
  }
}
getScreen()
getButtons();

console.log(operate(2, 5, "/"));
