// select
const count = document.querySelector('.count');
const plus = document.querySelector('.increase');
const minus = document.querySelector('.decrease');
const steps = document.querySelector('.steps');
const reset = document.querySelector('.reset');
let c = 0;
let s = 1;
//increase
function update() {
    count.textContent = c;
}

// event
plus.addEventListener('click', () => {
    c += s;
    update();
})
minus.addEventListener('click', () => {
    c -= s;
    update();
})

reset.addEventListener('click', () => {
    c = 0;
    update();
})

// steps
steps.addEventListener('input', (e) => {
    const value = parseInt(e.target.value, 10);
    s = isNaN(value) ? 1 : value;
})