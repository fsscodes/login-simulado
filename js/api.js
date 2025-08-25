const URL = "http://localhost:4000/cadastros";

const api = {
  async salvarCadastro(cadastro) {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cadastro),
      });
      return await response.json();
    } catch (error) {
      alert("Erro ao realizar cadastro");
      throw error;
    }
  },

  async cadastroExistente() {
    try {
      const response = await fetch(URL);
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};

export default api;
