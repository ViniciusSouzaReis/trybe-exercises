let array = ['java', 'javascript', 'python', 'html', 'css'];
let iMaior = array[0];
let iMenor = array[0];

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > iMaior.length) {
        iMaior = array[i];
    }
}

for (let i = 0; i < array.length; i += 1) {
    if (array[i].length < iMenor.length) {
        iMenor = array[i];
    }
}

console.log(iMenor);
console.log(iMaior);