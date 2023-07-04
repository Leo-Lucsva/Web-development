/* criar variaveis de nome e idade e imprimi-las no console */

console.log('Aprendendo JavaScript!')

/* criar variaveis de nome e idade e imprimi-las no console */

var nome = 'Leonardo';
var idade = 10;

console.log('Meu nome é ' + nome + ' e minha idade é ' + idade + ' anos');

/* Operações matematicas basicas com 2 numeros */

var num1 = 10;
var num2 = 2;

var soma = num1 + num2;
var subtracao = num1 - num2;
var multiplicacao = num1 * num2;
var divisao = num1 / num2;
console.log(soma, subtracao, multiplicacao, divisao);

/* Digitar dois números e mostrar o maior */

function maiorValor (numA, numB) {
    let maior;
    
    if (numA > numB) {
        maior = numA;
    }
    
    else if (numB > numA) {
        maior = numB;
    }
    
    else {
        maior = false
    }

    return maior
}

var valorUm = parseInt(prompt('Digite um número'));
var valorDois = parseInt(prompt('Digite o segundo número'));

var maior = maiorValor(valorUm, valorDois);

if (maior) {
    document.write('O maior Valor é <h1>' + maior + '<h1>')
}
else {
    document.write('Os valores são os mesmos, não tem maior ou menor.')
}
