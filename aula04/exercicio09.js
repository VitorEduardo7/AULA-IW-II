let total = 0;
let numero;
do {
    numero = parseInt(prompt("Digite um número:"));
    if (numero >= 0) total += numero;
} while (numero >= 0);
console.log(`Soma total: ${total}`);