function enviar() {
    let nome = document.getElementById("nome")
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    let confirmarSenha = document.getElementById("confirmarSenha")

    let deposito = new Deposito(nome.value, email.value, senha.value, confirmarSenha.value);
    console.log(deposito);
}

class Deposito {
    constructor(nome, email, senha, confirmarSenha) {
        this.nome = nome
        this.email = email
        this.senha = senha
        this.confirmarSenha = confirmarSenha
    }
}
