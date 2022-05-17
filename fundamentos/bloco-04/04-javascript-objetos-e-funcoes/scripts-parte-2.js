// Exercício 1
function palindrome (word) {
    for (let i = 0; i < word.length; i += 1) {
        if(word[i] === word[(word.length - 1) - i]) {
            return true;
        } else {
            return false
        }
    }
}

console.log(palindrome('arara'));
console.log(palindrome('desenvolvimento'));

// Exercício 2
function biggerIndexValue(numeros) {
    let arrayIndex = 0;
    for (let i = 0; i < numeros.length; i += 1) {
        if (numeros[arrayIndex] < numeros[i]) {
            arrayIndex = i;
        }
    }
    return arrayIndex;
}

console.log(biggerIndexValue([2, 3, 6, 7, 10, 1]));

// Exercício 3
function lowerIndexValue(numeros) {
    let arrayLowerIndex = 0;
    for (let i = 0; i < numeros.length; i += 1) {
        if(numeros[arrayLowerIndex] > numeros[i]) {
            arrayLowerIndex = i;
        }
    }
    return arrayLowerIndex;
}

console.log(lowerIndexValue([2, 4, 6, 7, 10, 0, -3]));

// Exercício 4
function mostCharacters(nomes) {
    let biggerName = nomes[0];
    for (let i = 1; i < nomes.length; i += 1) {
        if (biggerName.length < nomes[i].length) {
            biggerName = nomes[i];
        }
    }
    return biggerName
}

console.log(mostCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercício 5
function repetibleNumber(numeros) {
    let numeroRepetido = 0;
    let contNumero = 0;
    let indexNumeroMaisRepete = 0;
    for (let i = 0; i < numeros.length; i += 1) {
        for (let index = 0; index < numeros.length; index += 1){
            if (numeros[i] === numeros[index]) {
                numeroRepetido += 1; 
            }
        }
        if (numeroRepetido > contNumero) {
            contNumero = numeroRepetido;
            indexNumeroMaisRepete = i;
        }
        numeroRepetido = 0;
    }
    return numeros[indexNumeroMaisRepete];
}
    

console.log(repetibleNumber([2, 3, 2, 5, 8, 2, 3]));

// Exercício 6
function sumNumbers(n) {
    let sum = 0;
    for (let i = n; i > 0; i -= 1) {
        if (n > 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumNumbers(5));

// Exercício 7
function verificaFimPalavra(word, ending) {
    word = word.split('');
    ending = ending.split('');
    control = true;

    for (let i = 0; i < ending.length; i += 1) {
        if (word[word.length - ending.length + i] !== ending[i]){
            control = false;
        } 
    }
    return control;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));