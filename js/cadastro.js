import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const formularioCadastro = document.getElementById("formulario-cadastro");

  formularioCadastro.addEventListener("submit", async (e) => {
    e.preventDefault();

    const primeiroNome = document.getElementById("nome-cadastro");
    const ultimoNome = document.getElementById("sobrenome-cadastro");
    const dataDeNascimento = document.getElementById("data-nascimento");
    const email = document.getElementById("email-cadastro");
    const senha = document.getElementById("senha");

    if (!validarCampos()) return;

    try {
      const cadastros = await api.cadastroExistente();
      const cadastroExiste = cadastros.find(
        (cadastro) => cadastro.email === email.value
      );

      if (cadastroExiste) {
        Swal.fire({
          title: "Erro!",
          text: "E-mail já cadastrado.",
          icon: "error",
          confirmButtonText: "Fechar",
        });
        return;
      }

      const novoCadastro = {
        primeiro_nome: primeiroNome.value,
        ultimo_nome: ultimoNome.value,
        data_nascimento: dataDeNascimento.value,
        email: email.value,
        senha: senha.value,
      };

      await api.salvarCadastro(novoCadastro);
      window.location.href = "login.html";
    } catch (error) {
      console.error("Erro ao buscar cadastros:", error);
      Swal.fire({
        title: "Erro!",
        text: "Ocorreu um problema ao realizar o cadastro. Tente novamente.",
        icon: "error",
        confirmButtonText: "Fechar",
      });
    }
  });

  function validarCampos() {
    const primeiroNome = document.getElementById("nome-cadastro").value.trim();
    const ultimoNome = document
      .getElementById("sobrenome-cadastro")
      .value.trim();
    const dataDeNascimento = document
      .getElementById("data-nascimento")
      .value.trim();
    const email = document.getElementById("email-cadastro").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("senha-confirmar").value;

    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    const regexEmail = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    const regexSenha = /^.{6,}$/;

    const erroNome = document.getElementById("nome-invalido");
    const erroSobrenome = document.getElementById("sobrenome-invalido");
    const erroData = document.getElementById("data-invalido");
    const erroEmail = document.getElementById("email-invalido");
    const erroSenha = document.getElementById("senha-invalido");
    const erroConfirmarSenha = document.getElementById(
      "confirmar-senha-invalido"
    );

    [
      erroNome,
      erroSobrenome,
      erroData,
      erroEmail,
      erroSenha,
      erroConfirmarSenha,
    ].forEach((el) => {
      el.style.display = "none";
      el.textContent = "";
    });

    let valido = true;

    if (!primeiroNome) {
      erroNome.style.display = "block";
      erroNome.textContent = "Primeiro nome obrigatório";
      valido = false;
    } else if (!regexNome.test(primeiroNome)) {
      erroNome.style.display = "block";
      erroNome.textContent = "Primeiro nome inválido";
      valido = false;
    }

    if (!ultimoNome) {
      erroSobrenome.style.display = "block";
      erroSobrenome.textContent = "Último nome obrigatório";
      valido = false;
    } else if (!regexNome.test(ultimoNome)) {
      erroSobrenome.style.display = "block";
      erroSobrenome.textContent = "Último nome inválido";
      valido = false;
    }

    if (!dataDeNascimento) {
      erroData.style.display = "block";
      erroData.textContent = "Data de nascimento obrigatória";
      valido = false;
    }

    if (!email) {
      erroEmail.style.display = "block";
      erroEmail.textContent = "E-mail obrigatório";
      valido = false;
    } else if (!regexEmail.test(email)) {
      erroEmail.style.display = "block";
      erroEmail.textContent = "E-mail inválido";
      valido = false;
    }

    if (!senha) {
      erroSenha.style.display = "block";
      erroSenha.textContent = "Senha obrigatória";
      valido = false;
    } else if (!regexSenha.test(senha)) {
      erroSenha.style.display = "block";
      erroSenha.textContent = "A senha deve ter pelo menos 6 caracteres";
      valido = false;
    }

    if (!confirmarSenha) {
      erroConfirmarSenha.style.display = "block";
      erroConfirmarSenha.textContent = "Confirmação de senha obrigatória";
      valido = false;
    } else if (senha !== confirmarSenha) {
      erroConfirmarSenha.style.display = "block";
      erroConfirmarSenha.textContent = "As senhas não coincidem";
      valido = false;
    }

    return valido;
  }
});
