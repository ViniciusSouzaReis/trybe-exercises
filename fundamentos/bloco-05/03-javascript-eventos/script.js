function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function calendarDays() {
      let calendarDay = document.getElementById('days');
      for (let i = 0 ; i < dezDaysList.length; i += 1) {
          let createLi = document.createElement('li');
          createLi.innerText = dezDaysList[i];
          calendarDay.appendChild(createLi);
          if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
              createLi.className = 'day-holiday';
          } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
              createLi.className = 'day-friday';
          } else if (dezDaysList[i] === 25) {
              createLi.className = 'day-holiday day-friday';
          }
      }
      return calendarDay;
  }
  console.log(calendarDays([29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]));

//   Exercicio 2
function holidaysFunction(string) {
    let buttonContainer = document.querySelector('.buttons-container');
    let createButton = document.createElement('button');
    let holidayButtomId = 'btn-holiday'

    createButton.innerText = string;
    createButton.id = holidayButtomId;
    buttonContainer.appendChild(createButton);
}
console.log(holidaysFunction('Feriados'));

//  Exercicio 3
let btnHoliday = document.querySelector('#btn-holiday');
let holidayColor = document.getElementsByClassName('day-holiday');
btnHoliday.addEventListener('click', changeHolidayColor)
function changeHolidayColor() {    
    for (let i = 0; i < holidayColor.length; i += 1) {
        if (holidayColor[i].style.backgroundColor === 'yellow') {
            holidayColor[i].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            holidayColor[i].style.backgroundColor = 'yellow';
        }
    }
}

//  Exercicio 4
function createFridayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';
  
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  };
  
  createFridayButton('Sexta-feira');

//  Exercício 5
let btnFriday = document.querySelector('#btn-friday');
let fridayText = document.getElementsByClassName('day-friday');
btnFriday.addEventListener('click', changefridayText) 
function changefridayText() {   
let compareFriday = fridayText;
    for (let i = 0; i < compareFriday.length; i += 1) {
        if (compareFriday[i] === fridayText[i]) {
            fridayText[i].innerText = 'Sexta-feira';
        } else if (compareFriday[i] !== fridayText[i]){
            fridayText[i].innerText = compareFriday[i];
        }
    }
}

//  Questão 6
function mouseOver() {
    let listItem = document.querySelector('#days');
    listItem.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '40px';
        event.target.style.fontWeight = '600';
    })
};
function mouseLeave (){
    let listItem = document.querySelector('#days');
    listItem.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    })
};

mouseOver();
mouseLeave();

// Questão 7
function insertTask(string) {
    let myTask = document.querySelector('.my-tasks');
    let createSpan = document.createElement('span');
    createSpan.innerText = string;
    myTask.appendChild(createSpan);
}
insertTask('projeto');

// Questão 8
function createLegend(cor) {
    let myTasks = document.querySelector('.my-tasks');
    let createDiv = document.createElement('div');
    createDiv.style.backgroundColor = cor;
    createDiv.className = 'task';
    myTasks.appendChild(createDiv);
}
createLegend('green');

//  Questão 9
let taskWay = document.querySelector('.task');
taskWay.addEventListener('click', taskSelected);
function taskSelected() {
    if (taskWay.className === 'task') {
        taskWay.className += ' selected';
    } else {
        taskWay.className = 'task';
    }
}

//  Questão 10
let daysList = document.querySelector('#days');
daysList.addEventListener('click', function(event) {
    if (event.target.style.color === 'green') {
        event.target.style.color = 'rgb(119,119,119)';
    } else  {
        event.target.style.color = 'green'
    }
})

//  Questão bonus
// let buttonInputWay = document.querySelector('#btn-add');
// let taskListWay = document.querySelector('.task-list');
// let inputTask = document.querySelector('#task-input');

// buttonInputWay.addEventListener('click'.function() {
//     if (inputTask.value.length > 0) {
//         let createNewLi = document.createElement('li');
//         createNewLi.innerText = inputTask.value;
//         taskListWay.appendChild(createNewLi);
//         inputTask.value = '';
//     } else {
//         alert('Erro: Caractere não detectado');
//     }
// })
function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  };
  
  addNewTask();