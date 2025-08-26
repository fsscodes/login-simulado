# 🖥️ Projeto: Login Simulado

O **Login Simulado** é uma aplicação web simples que permite realizar cadastros e login de usuários, simulando o comportamento de uma API real.  
O backend está hospedado online via **MockAPI**, permitindo que o frontend funcione sem necessidade de servidor local.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## 🖼️ Demonstração

Você pode testar a aplicação online (frontend) via [https://login-simulado.vercel.app/index.html].  
O backend de testes está disponível no MockAPI: [https://68acf7d2b996fea1c08b45e0.mockapi.io/cadastros/users]

---

## 🛠️ Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- Fetch API  
- MockAPI (API fake para cadastro e login)

---

## ✨ Funcionalidades

### ➕ Cadastro de Usuários
O usuário pode preencher o formulário de cadastro com:  
- Primeiro Nome  
- Último Nome  
- Data de Nascimento  
- E-mail  
- Senha  

O sistema realiza todas as verificações necessárias e envia os dados para o MockAPI, salvando o registro.

### 🔑 Login
O usuário pode se logar usando e-mail e senha.  
O sistema verifica se o usuário existe na API e permite o acesso à página **Home**.

### 📊 Listagem de Usuários
Você pode visualizar os cadastros salvos acessando diretamente o endpoint MockAPI.

### 🖥️ Interface Responsiva
O design é adaptado para desktop e mobile.

---

## 📄 Como rodar o projeto localmente

1. **Clone ou baixe o repositório:**

```bash
git clone https://github.com/fsscodes/login-simulado.git
```
2. **Abra os arquivos HTML no navegador ou hospede em algum serviço como Vercel.**

3. **API integrada:**
Todos os cadastros e logins utilizam a URL do MockAPI:

```bash
const URL_BASE = "https://68acf7d2b996fea1c08b45e0.mockapi.io/cadastros/users";
```

4. **Acesse as páginas:**

- `index.html` → Página de login

- `cadastro.html` → Página de cadastro

- `home.html` → Página após login

- `senha-nova.html` → Página de redefinição de senha

---

## 👨‍💻 Autor

Desenvolvido por Felipe Silva
