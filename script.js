// Global variables
let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let operator = null;
let currentOperand = null;

// Store the number buttons in variables
const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');

// Store the function buttons
const clearButton = document.querySelector('#clearButton');
const deleteButton = document.querySelector('#deleteButton');
const equalsButton = document.querySelector('#equalsButton');

// Listen for user input
window.addEventListener('keydown', handleKeyboardInput);
clearButton.addEventListener('click', clearDisplay);
deleteButton.addEventListener('click', deleteChar);
equalsButton.addEventListener('click', calculate);

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
);

// Handle keyboard input
function handleKeyboardInput(event) {
  const key = event.key;
  if (key >= 0 && key <= 9) {
    appendNumber(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    setOperation(key);
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Backspace') {
    deleteChar();
  } else if (key === 'Escape') {
    clearDisplay();
  }
}

// Clear display function
function clearDisplay() {
  displayValue = '';
  firstOperand = null;
  secondOperand = null;
  operator = null;
  currentOperand = null;
  updateDisplay();
  updateCalculator();
}

// Delete last character function
function deleteChar() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

// Append number to display
function appendNumber(number) {
  if (displayValue.length >= 10) return; // Limit input length
  displayValue += number;
  updateDisplay();
}

// Set operation function
function setOperation(op) {
  if (operator !== null && displayValue !== '') {
    calculate(); // If there's an operation ongoing, calculate first
  }

  firstOperand = displayValue;
  operator = op === 'x' ? '*' : op; // Normalize 'x' to '*'
  displayValue = '';
  updateCalculator();
}

// Perform calculation
function calculate() {
  if (!firstOperand || !operator || displayValue === '') return;

  secondOperand = displayValue;
  displayValue = operate(firstOperand, secondOperand, operator);
  
  firstOperand = displayValue;
  secondOperand = null;
  operator = null;
  updateDisplay();
  updateCalculator();
}

// Update the display
function updateDisplay() {
  const displayText = document.querySelector('#displayText');
  displayText.textContent = displayValue;
}

// Update the calculation text
function updateCalculator() {
  const calculationText = document.querySelector('#calculationText');
  calculationText.textContent = `${firstOperand ? firstOperand : ''} ${operator ? operator : ''} ${secondOperand ? secondOperand : ''}`;
}

// Operator functions
function operate(firstOperand, secondOperand, operator) {
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);

  if (operator === '/' && secondOperand === 0) {
    return 'Error'; // Prevent division by zero
  }

  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}
