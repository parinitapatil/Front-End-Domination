const previousInp = document.querySelector('.previous-inp');
const currentInp = document.querySelector('.current-inp');
const buttons = document.querySelectorAll('.btn');

let currentopr = '';
let previousopr = '';
let operation = null;

buttons.forEach((item) => {
    item.addEventListener('click', () => {
        const action = item.dataset.action;
        const number = item.dataset.number;
        const op = item.dataset.operation; 
        if (number) appendNumber(number);
        if (op) operator(op);
        if (action == 'calculate') calculate();
        updateDisplay();
    })
})

//Number 
function appendNumber(number){
    if (number === '0' && currentopr === '0') return;
    currentopr += number;
    
}

// operator
function operator() {
    if (currentopr === '') return;
    if (previousopr !== '') calculate();
    operation = op;
    previousopr = currentopr;
    currentopr = '';
    updateDisplay();
}

// calculate
function calculate() {
    let res;
}
//update
function updateDisplay() {
    currentInp.textContent = currentopr || '0';
    previousInp.textContent = operation ? `${previousopr} ${operation}` : '';
}