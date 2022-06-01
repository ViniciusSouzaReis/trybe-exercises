const btnSend = document.getElementById('send-btn');
const btnReset = document.getElementById('reset-btn');
const inputElement = document.querySelectorAll('input');
const border = document.getElementById('container');
border.style.border = 'solid black 2px';
border.style.padding = '10px';
const button = document.getElementById('btn');
button.style.margin = '10px';

const compareName = document.getElementById('input-name');
const compareEmail = document.getElementById('input-email');
const textAreaElement = document.querySelector('textarea');

function submitDefault() {
    if (inputElement[8].checked === false) {
        alert('O formulario nao pode ser enviado!')
    }
}

function resetValues() {
    for (let i = 0; i < inputElement.length; i += 1) {
        const userInput = inputElement[i];
        userInput.value = '';
        userInput.checked = false;
    }
    textAreaElement.value = '';
}

function checkCharacters() {
    if (compareName.value.length < 10 || compareName.value.length > 50 || compareEmail.value.length < 10 || compareEmail.value.length > 50 || textAreaElement.value.length > 500) {
        alert('Dados Inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
}

btnSend.addEventListener('click', checkCharacters);
btnSend.addEventListener('click', submitDefault);
btnReset.addEventListener('click', resetValues);

// var picker = new Pikaday({
//     field: document.getElementById('datepicker'),
//     format: 'D/M/YYYY',
//     toString(date, format) {
//         // you should do formatting based on the passed format,
//         // but we will just return 'D/M/YYYY' for simplicity
//         const day = date.getDate();
//         const month = date.getMonth() + 1;
//         const year = date.getFullYear();
//         return `${day}/${month}/${year}`;
//     },
//     parse(dateString, format) {
//         // dateString is the result of `toString` method
//         const parts = dateString.split('/');
//         const day = parseInt(parts[0], 10);
//         const month = parseInt(parts[1], 10) - 1;
//         const year = parseInt(parts[2], 10);
//         return new Date(year, month, day);
//     }
// });

