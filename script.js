// Arithmetic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let a;
let operator;
let b;

function operate(a,operator,b) {
  switch (operator) {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);
  }
}


// Display functions
function clearDisplay() {

}

function deleteChar() {

}

function appendChar() {

}

function calculate() {

}