# Clínica Veterinária — Projeto Desenvolvimento Web

Este repositório contém o projeto prático desenvolvido para a disciplina de **Desenvolvimento Web**, integrante do 2º período do curso de **Bacharelado em Inteligência Artificial** da **Faculdade PIT (Piauí Instituto de Tecnologia)**, sob a orientação do **Prof. Martins**.

---

## 📌 Sobre o Projeto

O objetivo do projeto é desenvolver um website institucional e funcional para uma **Clínica Veterinária**, aplicando na prática as tecnologias fundamentais da web (HTML5, CSS3 e JavaScript).

O sistema visa apresentar os serviços oferecidos, permitir o agendamento de consultas, apresentar a equipe de profissionais e disponibilizar informações de contato e localização.

---

## 🚀 Status do Desenvolvimento

> 🎨 **Em andamento:** A página institucional está estruturada em HTML e estilizada com CSS responsivo inicial.

* [x] Estruturação da página principal (`dashboard/index.html`)
* [x] Criação das seções institucionais e formulários em HTML
* [x] Estilização visual inicial, banner com imagem de fundo e rodapé
* [x] Organização responsiva com Flexbox no menu, serviços e formulário
* [x] Formulário visual de contato/agendamento
* [ ] Processamento do formulário e validações dinâmicas com JavaScript *(Etapa futura)*

**Situação atual:** HTML e CSS iniciais implementados ✅ | JavaScript e integração do formulário pendentes...

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo. ✅ *Concluído*
* **CSS3:** Design, layout, banner, cards de serviços e responsividade inicial com Flexbox. ✅ *Implementado*
* **JavaScript:** Interatividade, manipulação do DOM e validação de dados. *(A ser implementado)*

---

## 📂 Estrutura de Arquivos

```text
.
├── assets/             # Imagens e recursos visuais
│   ├── cachorro e gato.png
│   └── hero.webp       # Imagem de fundo do banner
├── dashboard/          # Página principal e estilos
│   ├── index.html        # Página principal
│   └── styles/
│       └── styles.css    # Estilos e regras de layout
├── LICENSE              # Licença de uso estudantil
└── README.md            # Documentação do projeto

```

---

## 📄 Estrutura da Página (`dashboard/index.html`)

A versão atual do código HTML contempla as seguintes seções semânticas:

1. **Cabeçalho (`<header>`):** Logotipo e menu de navegação.
2. **Banner Principal (`<section class="secao hero">`):** Apresentação com imagem de fundo e chamada para ação (CTA).
3. **Sobre a Clínica (`<section id="sobre">`):** Missão, visão e estrutura da clínica.
4. **Serviços (`<section id="servicos">`):** Cards de consultas veterinárias, banho e tosa e pet shop organizados com Flexbox.
5. **Contato (`<section id="contato">`):** Formulário visual para solicitação de atendimento, organizado verticalmente com Flexbox.
6. **Rodapé (`<footer>`):** Direitos autorais e informações institucionais.

### Uso do Flexbox

O CSS utiliza Flexbox para centralizar o menu de navegação, distribuir os
cards de serviços com quebra de linha em telas menores e organizar os campos
do formulário em coluna.

---

## 💻 Como Executar o Projeto

1. Clone este repositório:
```bash
git clone https://github.com/DevNunes-tech/clinica-veterinaria.git

```


2. Navegue até a pasta do projeto:
```bash
cd clinica-veterinaria

```


3. Abra o arquivo `dashboard/index.html` em qualquer navegador web de sua preferência.

Como o projeto é estático nesta etapa, não é necessário instalar dependências ou executar um servidor para visualizar a página.

---

## 👤 Autor

* **Aluno:** Mateus Oliveira Nunes
* **Curso:** Bacharelado em Inteligência Artificial — 2º Período
* **Instituição:** Faculdade PIT (Piauí Instituto de Tecnologia)
* **Professor:** Prof. Martins

---

## 📜 Licença de Uso

Este projeto possui uma **Licença de Uso Estudantil e Modificação Controlada**
e destina-se exclusivamente a fins educacionais, acadêmicos e de estudo.

É permitido consultar e executar o projeto para esses fins, desde que os
créditos do autor sejam mantidos. Qualquer alteração, adaptação, inclusão,
exclusão ou outra modificação no código-fonte exige **autorização prévia e
expressa do autor**, que deve ser solicitada antes de mexer no código ou
reutilizá-lo.

Também não é permitida a cópia, publicação, distribuição, sublicenciamento,
comercialização ou incorporação do projeto, total ou parcialmente, em outro
projeto sem essa autorização.

Os termos completos estão no arquivo [LICENSE](LICENSE).