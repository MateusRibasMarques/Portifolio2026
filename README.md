# 💻 Mateus.dev


🔗 **Site publicado:** https://portifolio2026-mu.vercel.app/



---

## 📸 Protótipos

### Wireframes (Figma)

🔗 Figma: https:https://www.figma.com/design/97ZcJIpKjyxwbuvu9QWTBE/Untitled?node-id=0-1&p=f&t=PJm7bDZudnjktdZc-0



---

## ⚡ Funcionalidades

- **Sobre Mim:** apresentação em português e inglês (formação, área de atuação, interesses, objetivos e hobbies).
- **Projetos:** linha do tempo do projeto mais antigo ao mais recente, com nome, descrição, tecnologias, link do repositório no GitHub e imagem do projeto em funcionamento. Os dados dos repositórios são lidos da API do GitHub.
- **Experiências:** formação e experiências com instituição, atividade e descrição.
- **Contato:** links para e-mail, WhatsApp, LinkedIn e GitHub, e formulário (nome, e-mail e mensagem) com envio de e-mail pelo EmailJS e validação dos campos.
- **Terminal interativo:** aceita `help`, `about`, `projects`, `skills`, `experience`, `contact` e `clear`, com histórico (setas), autocompletar (Tab) e limpar (Ctrl + L).
- **Painéis laterais:** explorador de arquivos, busca nos conteúdos, repositórios do GitHub, tecnologias e configurações. `Ctrl + B` mostra ou esconde o painel.
- **Abas de arquivos:** abrir, trocar e fechar (inclusive com o botão do meio do mouse).

---

## 🛠 Tecnologias utilizadas

| Categoria | Tecnologia |
|---|---|
| Biblioteca de interface | React 19 |
| Build / dev server | Vite |
| Linguagens | JavaScript (ES Modules), HTML5, CSS3 |
| Estilização | CSS Modules |
| Envio de e-mail | EmailJS |
| Ícones | React Icons |
| Dados dos projetos | API REST do GitHub |
| Lint | Oxlint |
| Versionamento | Git e GitHub |
| Hospedagem | Vercel |
| Prototipação | Figma |

---

## 📦 Dependências

### Produção

| Pacote | Versão | Uso |
|---|---|---|
| `react` | ^19.2.8 | Biblioteca de interface |
| `react-dom` | ^19.2.8 | Renderização no navegador |
| `@emailjs/browser` | ^5.0.3 | Envio do formulário de contato por e-mail |
| `react-icons` | ^5.7.0 | Ícones |

### Desenvolvimento

| Pacote | Versão | Uso |
|---|---|---|
| `vite` | ^8.3.0 | Servidor de desenvolvimento e build |
| `@vitejs/plugin-react` | ^6.1.1 | Suporte a React no Vite |
| `oxlint` | ^1.81.0 | Análise estática do código |
| `@types/react` | ^19.2.18 | Tipos do React |
| `@types/react-dom` | ^19.2.7 | Tipos do React DOM |

---

## 🗂 Estrutura de diretórios

```
Portifolio2026/
├── README.md
└── mateus.dev/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── .env                      # variáveis do EmailJS (não vai para o GitHub)
    ├── public/
    │   ├── favicon.svg
    │   └── projetos/
    │       └── loginpuc.png      # imagem do projeto
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        ├── App.css
        ├── data/
        │   └── contatos.js       # e-mail, WhatsApp, LinkedIn e GitHub
        ├── services/
        │   └── github.js         # consulta à API do GitHub
        ├── Pages/
        │   └── Home/             # tela principal
        └── Components/
            ├── Sidebar/          # barra de ícones lateral
            ├── Painel/           # busca, repositórios, tecnologias e configurações
            ├── Explorer/         # árvore de arquivos e conteúdo (data.js)
            ├── Header/           # abas dos arquivos abertos
            ├── Editor/           # exibição dos arquivos e páginas
            ├── Projetos/         # linha do tempo de projetos
            ├── Contato/          # links e formulário de contato
            └── Terminal/         # terminal interativo
```

---

## 🏗 Arquitetura

O projeto é uma aplicação **front-end** (SPA) em React, sem servidor próprio:

- Os textos do portfólio ficam em `Components/Explorer/data.js`, organizados como uma árvore de pastas e arquivos.
- Os projetos são buscados na **API do GitHub** em tempo de execução.
- O formulário de contato envia o e-mail diretamente do navegador pelo **EmailJS**.
- A hospedagem é estática, na **Vercel**.

---

## ▶️ Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm
- Git

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/MateusRibasMarques/Portifolio2026.git
cd Portifolio2026/mateus.dev
```

### 2️⃣ Instalar as dependências

```bash
npm install
```

### 3️⃣ Configurar o envio de e-mail (EmailJS)

Crie uma conta em [emailjs.com](https://www.emailjs.com/), conecte um serviço de e-mail e crie um modelo (template) com os campos `{{nome}}`, `{{email}}` e `{{mensagem}}`.

Depois crie o arquivo `.env` na pasta `mateus.dev`:

```env
VITE_EMAILJS_SERVICO=seu_service_id
VITE_EMAILJS_MODELO=seu_template_id
VITE_EMAILJS_CHAVE=sua_public_key
```

> Sem o `.env`, o site funciona normalmente, mas o formulário de contato não envia mensagens.

### 4️⃣ Ajustar seus dados de contato

Edite `src/data/contatos.js` com seu e-mail, WhatsApp (formato `55` + DDD + número), LinkedIn e GitHub.

### 5️⃣ Rodar o projeto

```bash
npm run dev
```

Acesse `http://localhost:5173`.



## 🖥 Como usar o site

- Clique nos arquivos do explorador para abri-los em abas.
- Use os ícones da barra lateral para buscar, ver repositórios, tecnologias e configurações.
- No terminal, digite `help` para ver os comandos.
- Em `contact.java`, preencha o formulário para enviar uma mensagem.

---

## 👤 Autor

**Mateus Ribas Marques**

- GitHub: [@MateusRibasMarques](https://github.com/MateusRibasMarques)
- LinkedIn: [mateusribas](https://www.linkedin.com/in/mateusribas/)
- E-mail: marcalribas315@gmail.com
