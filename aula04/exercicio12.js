let nota;

nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));
while (nota < 0 || nota > 10);
console.log("Nota válida:", nota);