// select
const input = document.querySelector('#inp');
const button = document.querySelector('.change');
const number = document.querySelectorAll('.num');

// event
button.addEventListener('click', () => {
    const val = parseInt(input.value, 10);
    // number.forEach((n) => (n.style.backgroundColor = "#ddd"));

    // check if valid 
    if (val >= 1 && val <= 9) {
        const selectNumber = document.getElementById(`${val}`);
        selectNumber.style.backgroundColor = "#ffc1cb";
    }
})
