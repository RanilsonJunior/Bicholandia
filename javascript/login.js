function cadastrar() {
    let nome = document.getElementById("nome")
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    let confirmarSenha = document.getElementById("confirmarSenha")

    let deposito = new Deposito(nome.value, email.value, senha.value, confirmarSenha.value);
    console.log(deposito);

    if(deposito.validarDados()) {
        let modalContainer = document.querySelector('.modal-container');
        modalContainer.classList.add('active');
        let titulo = document.querySelector('.titulo');
        titulo.style.color = "#28a745"
        titulo.innerHTML = 'Registro inserido com sucesso'
        let descricao = document.querySelector('.descricao');
        descricao.innerHTML = 'A conta foi criada com sucesso!';
        let btnClose = document.querySelector('.btnClose');
        btnClose.innerHTML = 'Voltar';
        btnClose.style.backgroundColor = "#28a745";
        btnClose.addEventListener('mouseover', function() {
            btnClose.style.backgroundColor = "#218838";
        })
        btnClose.addEventListener('mouseout', function() {
            btnClose.style.backgroundColor = "#28a745";
        })
        nome.value = ''
        email.value = ''
        senha.value = ''
        confirmarSenha.value = ''
    } else {
        let modalContainer = document.querySelector('.modal-container');
        modalContainer.classList.add('active');
        let titulo = document.querySelector('.titulo');
        titulo.style.color = "#dc3545"
        titulo.innerHTML = 'Erro na gravação'
        let descricao = document.querySelector('.descricao');
        descricao.innerHTML = 'Existem campos obrigatórios que não foram preenchidos';
        let btnClose = document.querySelector('.btnClose');
        btnClose.innerHTML = 'Voltar e corrigir';
        btnClose.style.backgroundColor = "#dc3545";
        btnClose.addEventListener('mouseover', function() {
            btnClose.style.backgroundColor = "#c82333";
        })
        btnClose.addEventListener('mouseout', function() {
            btnClose.style.backgroundColor = "#dc3545";
        })
    }
}

class Deposito {
    constructor(nome, email, senha, confirmarSenha) {
        this.nome = nome
        this.email = email
        this.senha = senha
        this.confirmarSenha = confirmarSenha
    }

    validarDados() {
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null)
                return false
        }
        return true
    }
}


// -------------------------------------------

function abrirModal() {
    let modalContainer = document.querySelector('.modal-container');
    modalContainer.classList.add('active')
}

function fecharModal() {
    let modalContainer = document.querySelector('.modal-container');
    modalContainer.classList.remove('active')
    

}