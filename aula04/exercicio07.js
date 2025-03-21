let primo = parseInt(prompt("Digite um número:"));
let eprimo = primo > 1;
for (let i = 2; i < primo; i++) {
    if (primo % i === 0) {
        eprimo = false;
        break;
    }
}
console.log(eprimo ? "É primo" : "Não é primo");