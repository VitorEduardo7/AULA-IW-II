let valor = parseInt(prompt("Digite o valor para saque:"));
let cedulas = [100, 50, 20, 10, 5, 2, 1];

for (let cedula of cedulas) {
    let qtd = Math.floor(valor / cedula);
    if (qtd > 0) {
        console.log(`${qtd} nota(s) de R$${cedula}`);
        valor -= qtd * cedula;
    }
}