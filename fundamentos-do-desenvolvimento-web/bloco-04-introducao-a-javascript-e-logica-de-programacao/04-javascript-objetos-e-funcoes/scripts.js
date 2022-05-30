// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 31,
//     medals: {
//         golden: 2,
//         silver: 3,
//     },
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
// };


// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(car[index]);
//   }

// let food = ['hamburguer', 'bife', 'acarajé'];

// for (let index of food) {
//     console.log(index);
// }

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

// for (i in names) {
//     console.log('Olá ' + names[i]);
// }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020,
//   };

// for (i in car) {
//     console.log(i + ' = ' + car[i]);
// }

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20));
console.log(maiorNum(2, -5));
console.log(maiorNum(1, 1));  