let cadastro = false;

document.getElementById("toggle").onclick = (e) => {
    e.preventDefault();

    cadastro = !cadastro;

    document.getElementById("titulo").innerText = cadastro ? "Cadastro" : "Login";
    document.querySelector("button").innerText = cadastro ? "Cadastrar" : "Entrar";

    document.getElementById("toggle").innerText = cadastro 
        ? "Já tem uma conta? Faça login!" 
        : "Não tem uma conta? Cadastre-se!";

    document.getElementById("mensagem").innerHTML = "";
};

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<div class='text-danger'>Email inválido!</div>";
        return;
    }

    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='text-danger'>A senha deve ter pelo menos 4 caracteres!</div>";
        return;
    }

    if (cadastro) {
        localStorage.setItem(email, senha);
        mensagem.innerHTML = "<div class='text-success'>Cadastro realizado com sucesso!</div>";
    } else {
        let salva = localStorage.getItem(email);

        if (salva === senha) {
            mensagem.innerHTML = "<div class='text-success'>Login realizado com sucesso!</div>";
        } else {
            mensagem.innerHTML = "<div class='text-danger'>Dados incorretos!</div>";
        }
    }

    document.getElementById("form-login").reset();
};