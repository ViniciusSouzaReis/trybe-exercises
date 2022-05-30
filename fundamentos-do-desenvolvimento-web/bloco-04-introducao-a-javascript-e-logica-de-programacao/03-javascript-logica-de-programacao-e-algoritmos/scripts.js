let fatorial = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let resultadoFatorial = 1;

for (let i = 0; i < fatorial.length; i += 1) {
        resultadoFatorial *= fatorial[i];
}

console.log(resultadoFatorial);
