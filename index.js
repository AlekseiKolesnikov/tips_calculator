'use strict';

const calculateButton = document.getElementById('calculate-button');
const result = document.querySelector('.popupText');

function addResult() {
    const billAmount = parseInt(document.getElementById('bill').value);
    const guestsNumber = parseInt(document.getElementById('guests').value);
    const serviceQuality = parseFloat(document.getElementById('service-quality').value);

    let finalResult = ((billAmount * serviceQuality) / guestsNumber);
    finalResult = Math.round(finalResult * 100) / 100;


    result.textContent = `$${finalResult.toFixed(2)}`;
}

function openTheForm() {
    document.querySelector('.popup-body').style.display = "block";
}

calculateButton.addEventListener('click', addResult);
calculateButton.addEventListener('click', function () {
    openTheForm();
})