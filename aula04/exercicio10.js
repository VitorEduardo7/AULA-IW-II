let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativa;
do {
    tentativa = parseInt(prompt("Adivinhe o número (1 a 10):"));
    if (tentativa < numeroSecreto) console.log("Tente um número maior.");
    else if (tentativa > numeroSecreto) console.log("Tente um número menor.");
} while (tentativa !== numeroSecreto);
console.log("Parabéns! Você acertou.");