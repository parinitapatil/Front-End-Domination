let count = 0;

const display = document.querySelector('.counter');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

function update() {
    display.textContent = count;
}

//event
increase.addEventListener('click', () => {
    count++;
    update();
});
decrease.addEventListener('click', () => {
    count--;
    update();
});
reset.addEventListener('click', () => {
    count=0;
    update();
});