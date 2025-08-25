import api from "./api.js";

const formEsqueceuSenha = document.getElementById("esqueceu-senha");

formEsqueceuSenha.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailDigitado = document.getElementById("email-cadastrado").value;
  const mensagem = document.querySelector(".mensagem-enviada");

  try {
    const cadastros = await api.cadastroExistente();
    const cadastroExiste = cadastros.find(
      (cadastro) => cadastro.email === emailDigitado
    );

    if (cadastroExiste) {
      Swal.fire({
        title: "Sucesso!",
        text: "Senha enviada com sucesso!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Erro!",
        text: "Não foi possível enviar a senha. Tente novamente.",
        icon: "error",
        confirmButtonText: "Fechar",
      });
    }
  } catch (error) {
    console.error("Erro ao buscar cadastros:", error);
  }
});
