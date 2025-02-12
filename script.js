// Global variables
let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let operator = null;
let currentOperand = null;

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
const operatorButtons = document.querySelectorAll('.operatorButton');

// Select all calculator buttons
const calculatorButtons = document.querySelectorAll('.btn');



/*User Input */

// Listen for User Input
window.addEventListener('keydown', handleKeyboardInput);  
clearButton.addEventListener('click', clearDisplay);
deleteButton.addEventListener('click', deleteChar);
equalsButton.addEventListener('click', calculate);

numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
  )

operatorButtons.forEach((button) =>
 button.addEventListener('click', () => setOperation(button.textContent))
  )



/* Handle User Input */

// Display functions
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

function clearDisplay() {
  displayValue = '';
  firstOperand = null;
  secondOperand = null;
  operator = null;
  updateDisplay();
}

function deleteChar() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}


function calculate() {
  if (firstOperand === null || operator === null) {
    return;
  }
  if (secondOperand === null) {
    secondOperand = displayValue;
  }
  displayValue = operate(firstOperand, secondOperand, operator);
  currentOperand = displayValue;
  firstOperand = null;
  secondOperand = null;
  operator = null;
  updateDisplay();
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay(); 
}

function setOperation(op) {
  displayValue = displayValue.trim();

 
  if (firstOperand === null) {
    firstOperand = displayValue;
    displayValue = '';
  } else if (secondOperand === null) {
    secondOperand = displayValue;
    displayValue = '';
    calculate();
  }else if (currentOperand !== null) {
    secondOperand = displayValue;
    displayValue = '';
    calculate();
  }

  operator = op; // Correctly set the global operator variable
}

function updateDisplay() {
  const displayText = document.querySelector('#displayText');
  displayText.textContent = displayValue;
}

function updateCalculator() {
  const calculationText = document.querySelector('#calculationText');
  calculationText.textContent = `${firstOperand} ${operator} ${secondOperand}`;
}


// Operator functions
function operate(firstOperand, secondOperand, operator) {
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);

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





