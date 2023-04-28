// expressoo de função
// const soma = function(num1, num2) {return num1 + num2;}
// console.log(soma(1, 1));

// diferença principal declaracao x expressao? R: HOISTING
// funções e var são "listadas" no topo do arquivo

console.log(apresentar());

function apresentar() {
    return 'olá';
}

console.log(soma(1, 1));
const soma = function(num1, num2) {return num1 + num2;}