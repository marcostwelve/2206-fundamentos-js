// Arrow function
const apresentarArrow = nome => `Olá, meu nome é ${nome}`; // Arrow function de uma linha
const soma = (num1, num2) =>  num1 + num2; // Arrow function de uma linha com dois parâmetros

//Arrow function com+ de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10) {
        return 'Os números precisam ser menores que 10';
    } else {
        return num1 + num2;
    }
}
console.log(somaNumerosPequenos(11, 5));