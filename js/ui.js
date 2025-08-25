const ui = {
  mostrarOuOcultarSenha(input, img) {
    const ocultar = input.getAttribute("type");

    if (ocultar === "password") {
      input.setAttribute("type", "text");
      img.src = "./assets/visibilidade.svg";
    } else {
      input.setAttribute("type", "password");
      img.src = "./assets/visibilidade-off.svg";
    }
  },
};

export default ui;
