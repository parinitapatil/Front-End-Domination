// select

const billInp = document.querySelector('#billAmount');
const tipInp = document.querySelector('#Tip');
const calculate = document.querySelector('#calcTip');
const tipDisplay = document.querySelector('#tip');
const totalDisplay = document.querySelector("#total");
const error = document.querySelector('.err');
const clear = document.querySelector('#clear');


calculate.addEventListener('click', () => {
    const billAmt = parseFloat(billInp.value);
    const tipAmt = parseFloat(tipInp.value);

    if (isNaN(tipAmt) || billAmt <= 0 || isNaN(billAmt) || tipAmt < 0 ) {
        error.textContent = 'Please enter valid details!';
    }

    //else--calculate
    const tipFinalAmount = (billAmt * tipAmt) / 100;
    const billFinalAmount = (billAmt + tipFinalAmount);

    //display
    tipDisplay.textContent = `${tipFinalAmount.toFixed(2)}`;
    totalDisplay.textContent = `${billFinalAmount.toFixed(2)}`;
    clearWindow();

})

const clearWindow = clear.addEventListener('click', () => {
    billInp.value = "";
    tipInp.value = "";

    totalDisplay.textContent = '';
    tipDisplay.textContent = '';
})