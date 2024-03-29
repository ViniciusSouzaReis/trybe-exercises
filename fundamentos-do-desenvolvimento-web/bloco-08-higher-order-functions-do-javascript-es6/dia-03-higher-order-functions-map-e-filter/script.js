const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
function formatedBookNames(books) {
  const expectedResult =  books.map((element) => `${element.name} - ${element.genre} ${element.author.name}`);
  return expectedResult;
}

// 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
function nameAndAge(book) {
  const iteration = book.map((element) => {
    const newObject = {};
    newObject.author = element.author.name
    newObject.age = element.releaseYear - element.author.birthYear;
    return newObject;
  });
  iteration.sort((a,b) => a.age - b.age);
  return iteration;
}

// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
function fantasyOrScienceFiction(book) {
  return book.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');
}

// 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
function oldBooksOrdered(book) {
  const organize = book.filter((element) => (2022 - element.releaseYear) > 60);
  organize.sort((a, b) => a.releaseYear - b.releaseYear);
  return organize;
}

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors(book) {
  const filter1 = book.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');
  const arrayToOrganize = filter1.map((element1) => element1.author.name).sort();
  return arrayToOrganize;
}

// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks(book) {
  const organize = book.filter((element) => (2022 - element.releaseYear) > 60);
  const newBook = organize.map((element) => element.name);
  return newBook;
}

// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
function authorWith3DotsOnName(book) {
  return book.filter((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  ))[0].name;
}
console.log(authorWith3DotsOnName(books));
