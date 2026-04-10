let cadastro = false;

document.getElementById("toggle").onclick = () => {
    
    cadastro = !cadastro;

    document.getElementById("titulo").innerText = cadastro ? "Cadastro" : "Login";
    document.querySelector("button").innerText = cadastro ? "Cadastrar" : "Entrar";

    document.getElementById("toggle").innerText = cadastro ? 
    "Já tem uma conta? Faça login!" 
    : "Não tem uma conta? Cadastre-se!";

    document.getElementById("mensagem").innerHTML = "";
}

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if (email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<div>Email inválido!</div>";
        return;
    }
    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='error'><p>A senha deve conter pelo menos 4 caracteres!</p></div>";
        return;
    }
    if (cadastro) {

        localStorage.setItem(email, senha);
        mensagem.innerHTML = "<div class='successo'><p>Cadastro realizado com sucesso!</p></div>";

    } else {

        let salva = localStorage.getItem(email);

        if (salva === senha) {
            mensagem.innerHTML = "<div class='successo'><p>Login realizado com sucesso!</p></div>";
        } else {
            mensagem.innerHTML = "<div class='erro'><p>Dados incorretos!</p></div>";
        }
    }

    document.getElementById("form").reset();
}
