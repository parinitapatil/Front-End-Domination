// select
const ht = document.querySelector('#ht');
const wt = document.querySelector('#wt');
const btn = document.querySelector('#btn');
const res = document.querySelector('#result');
const err = document.querySelector('#err');
const clear = document.querySelector('#clear');


// event
btn.addEventListener('click', () => {
    const height = parseFloat(ht.value);
    const weight = parseFloat(wt.value);

    // check input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        err.textContent = "Please enter a valid height and weight!"
    
    }

    // calculate BMI
    const bmi = weight / ((height / 100) ** 2);

    // display result

    res.textContent = `Your BMI is ${bmi.toFixed(2)} `;
    clearInp();
    if (bmi <= 18.5) {
        res.textContent += '(Underweight)';
        res.style.color = 'blue';
    }
    else if (bmi <= 24.9 && bmi>=18.5) {
        res.textContent += '(Normal Weight)';
        res.style.color = 'green';
    }
    else if (bmi <= 29.9 && bmi >=24.9) {
        res.textContent += "(OverWeight)";
        res.style.color = "orange";
    }
    else {
        res.textContent += "(Obese)";
        res.style.color = "red";
    }
})

// clear input
function clearInp() {
    clear.addEventListener('click', () => {
        ht.value = '';
        wt.value = '';
        res.textContent = '';
        err.textContent = '';
    })
}