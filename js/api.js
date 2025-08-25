const URL_BASE = "https://login-simulado-1.onrender.com";

const api = {
  async salvarCadastro(cadastro) {
    try {
      const response = await fetch(`${URL_BASE}/cadastros`, {
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
      const response = await fetch(`${URL_BASE}/cadastros`);
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};

export default api;
