//Parâmetros de função
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2));
console.log(soma(50, 82));
console.log(soma(-500, 500));

//parâmetros x argumentos
// ordem dos parametros, é como se declara os parâmentros na função

function nomeIdade(nome, idade) {
    return `Meu nome é: ${nome} e minha idade é: ${idade}`;
}

console.log(nomeIdade('Maurício', 26));

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}


console.log(multiplica(soma(2, 3)));