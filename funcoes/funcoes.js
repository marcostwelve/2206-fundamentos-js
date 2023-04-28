// 1) Declara a função
function imprimirTexto(nome) {
    console.log(nome);
}


// 2) Executa a função 1 ou + vezes
imprimirTexto(soma());

function soma() {
    return 2 + 2; // Retorno sempre é a última declaração da função
}

// console.log(soma());