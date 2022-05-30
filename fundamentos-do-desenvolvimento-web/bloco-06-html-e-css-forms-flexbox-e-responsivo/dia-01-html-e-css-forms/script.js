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