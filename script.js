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
