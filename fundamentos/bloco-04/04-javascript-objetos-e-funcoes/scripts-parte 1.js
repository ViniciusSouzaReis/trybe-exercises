// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Boas-vindas, ' + info.personagem);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   }

//   for (index in info) {
//       console.log(index);
//   }

// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
// }
// for (index in info, info2) {
//     console.log(info[index], info2[index]);
// }

//   console.log(info);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//       {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//       },
//     ],
// }

//   console.log('"O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '"');

//   console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

// function biggerValue(numeros) {
//     let higgerIndex = 0;
//     for (let index in numeros) {
//         if (numeros[index] > higgerIndex){
//             higgerIndex = index;
//         }
//     }
//     return higgerIndex;
// }

// console.log(biggerValue([2, 3, 6, 7, 10, 1, 15, 22, 30, 9]));


function smallerValue(numeros) {
    let menorIndice = 0;
    for (let index in numeros) {
        if (numeros[menorIndice] > numeros[index]) {
            menorIndice = index;
        }
    }
    return menorIndice;
}

console.log(smallerValue([2, 4, 6, 7, 10, 0, -3]));