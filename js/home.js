import api from "./api.js";

const btnLogout = document.querySelector(".btn-sair");
btnLogout.addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
});

async function mostrarUsuarioHome() {
  try {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!usuario) {
      window.location.href = "index.html";
      return;
    }

    const cadastros = await api.cadastroExistente();

    const usuarioAtualizado = cadastros.find(
      (cadastro) => cadastro.email === usuario.email
    );

    if (usuarioAtualizado) {
      document.querySelector(
        ".home-titulo"
      ).textContent = `Bem-vindo(a), ${usuarioAtualizado.primeiro_nome}!`;
    } else {
      window.location.href = "login.html";
    }
  } catch (error) {
    console.error("Erro ao carregar usuário:", error);
  }
}

mostrarUsuarioHome();
