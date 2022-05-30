// let n = 5;
// let symbol = "*"
// let inputLine ='';

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     inputLine += symbol;
// }
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     console.log(inputLine);
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let n = 5;
// let symbol = "*";
// let inputLine = "";

// for (let i = n; i > 0; i -= 1) {
//     inputLine += symbol
//     console.log(inputLine);
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let n = 5;
// let symbol = "*";
// let symbol2 = " ";
// let inputLine1 = "";
// let inputLine2 = "";
// let inputLine3 = "";
// let inputLine4 = "";
// let inputLine5 = "";


// for (let i = 0; i < n - 1; i += 1) {
//     inputLine1 += symbol2;
// }
// inputLine1 += symbol;
// console.log(inputLine1);

// for (let i = 0; i < n - 2; i += 1) {
//     inputLine2 += symbol2;
// }
// inputLine2 += symbol + symbol;
// console.log(inputLine2);

// for (let i = 0; i < n - 3; i += 1) {
//     inputLine3 += symbol2;
// }
// inputLine3 += symbol + symbol + symbol;
// console.log(inputLine3);

// for (let i = 0; i < n - 4; i += 1) {
//     inputLine4 += symbol2;
// }
// inputLine4 += symbol + symbol + symbol + symbol;
// console.log(inputLine4);

// for (let i = 0; i < n ; i += 1) {
//     inputLine5 += symbol;
// }
// console.log(inputLine5);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let size = 15;
let symbol = '*';
let inputLine = ' ';
let inputLinePosition = size;

for(let i = 0; i < size; i += 1 ) {
    for (let iPosition = 0; iPosition <= size; iPosition += 1) {
        if (iPosition < inputLinePosition) {
            inputLine += ' ';
        }
        else {
            inputLine += symbol;
        }
    }
    console.log(inputLine);
    inputLine = ' ';
    inputLinePosition -= 1;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let divisors = 1;
// let numberToCheck = 31;

// for (let number = 2; number <= numberToCheck; number += 1) {
//   if (numberToCheck % number === 0) {
//   divisors += 1;
//   }
// }

// if (divisors === 2) {
// console.log(numberToCheck + ' é primo');
// }
// else {
//     console.log(numberToCheck + ' não é primo');
// }