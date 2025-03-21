let num = parseInt(prompt("Digite um número:"));
let fatorial = 1;
for (let i = num; i > 1; i--) {
    fatorial *= i;
}
console.log(`Fatorial de ${num} é ${fatorial}`);