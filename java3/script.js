let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

if (usuario === "admin" && senha === "1234") {
    console.log("Login feito com sucesso");
} else {
    console.log("Erro de usuário e/ou senha");
}
