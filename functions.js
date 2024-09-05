function test(color, age = 18) {
  if (!(age > 18)) return 'Não permitido';

  console.log('Minha cor favorita é', color, 'e eu tenho', age, 'anos');

  return 'olá';
}

console.log(test('vermelho', 20));

// Parâmetro: o que é declarado e usado dentro da função
// Argumento: o valor que ele assume em tempo de execução (quando a função é invocada)

/*
  Avoid nesting
  1 - Identificar a condição
  2 - Analisar qual verificação é mais curta
  3 - Inverter a condição
  4 - Jogar o resto da execução para depois da verificação
*/

let arrowFunction = (param1) => 'test';

let retornoArrowFunction = arrowFunction();

console.log(retornoArrowFunction);

/* Arrow functions
  1 - Equivalente a uma função anônima
  2 - Pode ocultar o corpo (chaves) se houver apenas uma linha.
  3 - Se houver apenas um parâmetro, parêntesis são opcionais
*/

const parent = () => {
  const outraCoisa = function () {
    console.log('outra coisa');
  };

  outraCoisa();
};

parent();

// Cálculo fatorial (recursividade)
function fatorial(n) {
  return n >= 1 ? n * fatorial(n - 1) : 1;
}

const factorial = (n) => (n >= 1 ? n * factorial(n - 1) : 1);

const retornoObjeto = () => ({
  name: 'Mateus',
  surname: 'Queirós',
});

console.log(retornoObjeto());
