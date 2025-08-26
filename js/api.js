const URL_BASE = "https://68acf7d2b996fea1c08b45e0.mockapi.io/cadastros/users";

const api = {
  async salvarCadastro(cadastro) {
    try {
      const response = await fetch(URL_BASE, {
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
      const response = await fetch(URL_BASE);
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};

export default api;
