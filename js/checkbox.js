let btnSmic = document.querySelector('.button-smic');
let inputRate = document.querySelector('.input-rate');
let inputMonth = document.querySelector('.input-month');
let inputHour = document.querySelector('.input-hour');

let inputNoFrame = document.querySelector('.no-frame');
let inputFrame = document.querySelector('.frame');
let inputOfficial = document.querySelector('.official');
let inputSalaryPortage = document.querySelector('.salary-portage');
let inputIndependent = document.querySelector('.independent');
let inputAutoEntrepreneur = document.querySelector('.auto-entrepreneur');

let tauxMultiply = 0.23;
let tauxDivide = 0.77;


// Checkbox Non Cadre
inputNoFrame.addEventListener('click', () => {
    if (inputNoFrame.checked) {
        if (inputFrame.checked ) { inputFrame.checked = false }
        if (inputOfficial.checked ) { inputOfficial.checked = false }
        if (inputSalaryPortage.checked ) { inputSalaryPortage.checked = false }
        if (inputIndependent.checked ) { inputIndependent.checked = false }
        if (inputAutoEntrepreneur.checked ) { inputAutoEntrepreneur.checked = false }
    }
    inputRate.value = '23';
    tauxMultiply = 0.23;
    tauxDivide = 0.77;
    // console.log(tauxDivide)
})

inputFrame.addEventListener('click', () => {
    if (inputFrame.checked) {
        if (inputNoFrame.checked ) { inputNoFrame.checked = false }
        if (inputOfficial.checked ) { inputOfficial.checked = false }
        if (inputSalaryPortage.checked ) { inputSalaryPortage.checked = false }
        if (inputIndependent.checked ) { inputIndependent.checked = false }
        if (inputAutoEntrepreneur.checked ) { inputAutoEntrepreneur.checked = false }
    }
    inputRate.value = '25';
    tauxMultiply = 0.25;
    tauxDivide = 0.75;
    // console.log(tauxDivide)
})

inputOfficial.addEventListener('click', () => {
    if (inputOfficial.checked) {
        if (inputFrame.checked ) { inputFrame.checked = false }
        if (inputNoFrame.checked ) { inputNoFrame.checked = false }
        if (inputSalaryPortage.checked ) { inputSalaryPortage.checked = false }
        if (inputIndependent.checked ) { inputIndependent.checked = false }
        if (inputAutoEntrepreneur.checked ) { inputAutoEntrepreneur.checked = false }
    }
    inputRate.value = '15';
    tauxMultiply = 0.15;
    tauxDivide = 0.85;
    // console.log(tauxDivide)
})

inputSalaryPortage.addEventListener('click', () => {
    if (inputSalaryPortage.checked) {
        if (inputFrame.checked ) { inputFrame.checked = false }
        if (inputNoFrame.checked ) { inputNoFrame.checked = false }
        if (inputOfficial.checked ) { inputOfficial.checked = false }
        if (inputIndependent.checked ) { inputIndependent.checked = false }
        if (inputAutoEntrepreneur.checked ) { inputAutoEntrepreneur.checked = false }
    }
    inputRate.value = '51';
    tauxMultiply = 0.51;
    tauxDivide = 0.49;
    // console.log(tauxDivide)
})
    
inputIndependent.addEventListener('click', () => {
    if (inputIndependent.checked) {
        if (inputFrame.checked ) { inputFrame.checked = false }
        if (inputNoFrame.checked ) { inputNoFrame.checked = false }
        if (inputSalaryPortage.checked ) { inputSalaryPortage.checked = false }
        if (inputSalaryPortage.checked ) { inputSalaryPortage.checked = false }
        if (inputAutoEntrepreneur.checked ) { inputAutoEntrepreneur.checked = false }
    }
    inputRate.value = '45';
    tauxMultiply = 0.45;
    tauxDivide = 0.55;
    // console.log(tauxDivide)
})

inputAutoEntrepreneur.addEventListener('click', () => {
    if (inputAutoEntrepreneur.checked) {
        if (inputFrame.checked ) { inputFrame.checked = false }
        if (inputNoFrame.checked ) { inputNoFrame.checked = false }
        if (inputSalaryPortage.checked ) { inputSalaryPortage.checked = false }
        if (inputSalaryPortage.checked ) { inputSalaryPortage.checked = false }
        if (inputIndependent.checked ) { inputIndependent.checked = false }
    }
    inputRate.value = '24.3';
    tauxMultiply = 0.243;
    tauxDivide = 0.757;
})
    