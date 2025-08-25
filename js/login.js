import ui from "./ui.js";
import api from "./api.js";

document.querySelectorAll(".visibilidade").forEach((icone) => {
  icone.addEventListener("click", (e) => {
    e.preventDefault();
    const input = icone.parentElement.querySelector("input");
    const img = icone.querySelector("img");
    ui.mostrarOuOcultarSenha(input, img);
  });
});

const formularioLogin = document.getElementById("formulario-login");
if (formularioLogin) {
  formularioLogin.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.querySelector(".mensagem-erro");

    try {
      const cadastros = await api.cadastroExistente();
      const usuarioEncontrado = cadastros.find(
        (cadastro) => cadastro.email === email && cadastro.senha === senha
      );

      if (usuarioEncontrado) {
        localStorage.setItem(
          "usuarioLogado",
          JSON.stringify(usuarioEncontrado)
        );
        window.location.href = "home.html";
      } else {
        mensagemErro.textContent = "E-mail ou senha inválidos";
        document.getElementById("senha").value = "";
      }
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  });
}
