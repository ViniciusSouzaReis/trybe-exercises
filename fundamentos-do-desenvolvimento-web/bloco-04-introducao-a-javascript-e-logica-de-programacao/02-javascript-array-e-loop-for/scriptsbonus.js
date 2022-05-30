// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// numbers.sort(function(a, b){return a-b});
// console.log(numbers);
// ---> ordem crescente

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// numbers.sort(function(a, b){return b-a});
// console.log(numbers);
// ---> ordem decrescente

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];

for (let indice = 1; indice < numbers.length; indice += 1) {
    for (let secondIndex = indice -1; secondIndex < indice; secondIndex += 1) {
    array.push(numbers[secondIndex] * numbers[indice]);
    }
    if (numbers.length - 1 === indice) {
        array.push(numbers[indice] * 2);
    }
}


console.log(array);
