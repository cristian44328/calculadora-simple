const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'C') {
            clear();
        } else if (value === '=') {
            calculate();
        } else {
            handleInput(value);
        }
    });
});

function handleInput(value) {
    if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput === '') return; 
        if (previousInput !== '') {
            calculate(); 
        }
        operator = value;
        previousInput = currentInput;
        currentInput = '';
    } else {
        currentInput += value;
        updateDisplay();
    }
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operator = '';
    previousInput = '';
    updateDisplay();
}

function clear() {
    currentInput = '';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput;
}