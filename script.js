const container = document.querySelector(".cal-buttons");
const operators = ["AC", "C", "%", "+", "-", "/", "*", "="];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const calButtons =

function getButtons() {
  let count = 0;
  for (let i = 0; i < 19; i++) {
    const newButton = document.createElement("div");
    newButton.className = "buttons";
    // newButton.textContent = count;
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
      case 7:
        newButton.textContent = operators[4];
        newButton.classList.add("operator-btn");

        break;
      case 11:
        newButton.textContent = operators[5];
        newButton.classList.add("operator-btn");

        break;
      case 15:
        newButton.textContent = operators[6];
        newButton.classList.add("operator-btn");

        break;
      case 18:
        newButton.textContent = operators[7];
        newButton.classList.add("operator-btn");
        break;
    }
    if (count === 16) {
      newButton.style.width = "100px";
      newButton.textContent = 0;
    } else {
      newButton.style.width = "50px";
    }
    newButton.style.height = "50px";
    newButton.style.border = "1px solid black";
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
getButtons();

console.log(operate(2, 5, "/"));
