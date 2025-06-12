const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let expression = "";
/* Created By Yash kumar Banjare... */ 
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      calculate();
    } else if (value === "C") {
      expression = "";
      updateDisplay();
    } else {
      expression += value;
      updateDisplay();
    }
  });
});
/* Created By Yash kumar Banjare... */ 
function updateDisplay() {
  display.value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    if (!isFinite(result)) {
      throw new Error("Math Error");
    }
    expression = result.toString();
    updateDisplay();
  } catch (e) {
    display.value = "Error";
    expression = "";
  }
}
/* Created By Yash kumar Banjare... */ 
// Keyboard support
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/.";
  if (allowedKeys.includes(e.key)) {
    expression += e.key;
    updateDisplay();
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
    updateDisplay();
  } else if (e.key.toLowerCase() === "c") {
    expression = "";
    updateDisplay();
  }
});
/* Created By Yash kumar Banjare... */ 
