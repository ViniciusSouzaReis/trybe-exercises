// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it ('Verifica a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas', (done) => {
  const expectResult = 'ESTOU COMEÇANDO EM FRONTEND';
  uppercase('estou começando em frontend', (callback) => {
    try {
      expect(callback).toBe(expectResult);
      done();
    } catch (erro) {
      done(erro);
    }
  });
});