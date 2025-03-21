let usuario = "admin";
let senha = "1234";
let user, pass;
do {
    user = prompt("Usuário:");
    pass = prompt("Senha:");
} while (user !== usuario || pass !== senha);
console.log("Login bem-sucedido");