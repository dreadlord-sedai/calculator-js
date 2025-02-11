// Global variables
let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let operator = null;

//  Store the the number of the buttons in variables
const button0 = document.querySelector('#button0');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');

// Store the arithmetic operator buttons in variables
const addButton = document.querySelector('#addButton');
const subtractButton = document.querySelector('#subtractButton');
const multiplyButton = document.querySelector('#multiplyButton');
const divideButton = document.querySelector('#divideButton');

// Store the clear and other function buttons in variables
const clearButton = document.querySelector('#clearButton');
const deleteButton = document.querySelector('#deleteButton');
const equalsButton = document.querySelector('#equalsButton');
const numberButtons = document.querySelectorAll('.numberButton');

// Select all calculator buttons
const calculatorButtons = document.querySelectorAll('.btn');

// Listen for User Input
window.addEventListener('keydown', handleKeyboardInput);  // Fix the event name and function reference
clearButton.addEventListener('click', clearDisplay);
deleteButton.addEventListener('click', deleteChar);
equalsButton.addEventListener('click', calculate);

// Listen for Number Input
numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
  )

// Listen for Operator Input
operatorButtons.forEach((button) =>
 button.addEventListener('click', () => setOperation(button.textContent))
  )

// Handle User Input
function handleKeyBoardInput(event) {
  console.log(event.key);
}

// Arithmetic functions
function add(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

function subtract(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand) {
  return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
  return firstOperand / secondOperand;
}

function operate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '+':
      return add(firstOperand, secondOperand);
    case '-':
      return subtract(firstOperand, secondOperand);
    case 'x':
      return multiply(firstOperand, secondOperand);
    case '/':
      return divide(firstOperand, secondOperand);
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

