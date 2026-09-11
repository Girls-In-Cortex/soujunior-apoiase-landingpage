<div id="topo"></div>

<div align = "center">

# Landing Page - Apoia.se
> Projeto desenvolvido pela equipe **Girls In Cortex** para o hackaton da **SouJunior**.

</div>

<details>
<summary><b>Sumário</b></summary>

<br>

- [1. Sobre o Projeto](#1-sobre-o-projeto)
- [2. Demonstração](#2-demonstracao)
- [3. Estrutura e Seções da Landing Page](#3-estrutura-e-secoes-da-lp)
- [4. Tech Stacks](#4-tech-stacks)
- [5. Deploy](#5-deploy)
- [6. Como Executar](#6-como-executar)
- [7. Passo a Passo](#7-passo-a-passo)
- [8. Estrutura do Repositório](#8-estrutura-do-repositorio)
- [9. Equipe](#9-equipe)
- [10. Licença](#10-licenca)

</details>

## Sobre o Projeto <a id="1-sobre-o-projeto"></a>
A **SouJunior** é uma comunidade voluntária que conecta e impulsiona desenvolvedores em início de carreira por meio de mentorias gratuitas, projetos práticos e conexões com o mercado de trabalho.

Desenvolvida pelo squad **Girls In Cortex** durante o Hackathon SouJunior, esta Landing Page foi criada para transformar e fortalecer a captação de recursos da comunidade.

### 🔴 O Problema
A campanha de arrecadação da SouJunior no Apoia.se precisava de uma renovação visual e estratégica para comunicar melhor seu propósito, transmitir transparência sobre o uso dos recursos e engajar potenciais doadores.

### 🟢 A Solução
Desenvolvemos uma Landing Page moderna, intuitiva e focada na experiência do usuário (UX), projetada para destacar o impacto real das ações da SouJunior, apresentar depoimentos/métricas de sucesso e facilitar a conversão de novos apoiadores individuais e empresas parceiras.


## Demonstração <a id="2-demonstracao"></a>
**AQUI COLOCAREMOS O PITCH/FOTOS/LINKS...**


<p align="right"><a href="#topo">⬆️ Voltar ao topo</a></p>

## Estrutura e Seções da Landing Page <a id="3-estrutura-e-secoes-da-lp"></a>

A página foi estruturada estrategicamente para conduzir o visitante através de uma jornada de engajamento e conversão:

* **Header (Cabeçalho):** Navegação intuitiva e botão de CTA fixo para fácil acesso à doação em qualquer ponto da página.
* **Hero Section (Abertura):** Apresentação clara do propósito em 5 segundos com chamada para ação (CTA) principal.
* **Quem Somos:** Introdução à SouJunior para novos visitantes, destacando mentorias, projetos *open source* e as 4 formas de participação.
* **Causa (Transparência):** Prestação de contas detalhada mostrando como o recurso é investido (infraestrutura/servidores, mentorias e iniciativas *open source*).
* **Impacto:** Métricas e números de alcance (seguidores, projetos concluídos e pessoas impactadas).
* **Níveis de Apoio (Planos):** Apresentação clara das opções de contribuição (R$ 2, R$ 10 e R$ 25), com destaque visual para o plano intermediário (*Best Value*).
* **Parcerias Corporativas:** Área dedicada e formulário exclusivo para empresas interessadas em patrocínio institucional.
* **CTA de Fechamento:** Chamada final para ação reforçando a conversão direto para a plataforma Apoia.se.
* **Footer (Rodapé):** Links de apoio, redes sociais (Discord, WhatsApp, GitHub) e informações de licença.
> **Padrão de imagens:** todas as imagens adicionadas ao projeto devem respeitar o limite de **150 a 300 KB**, para manter a performance da LP (ligado à checagem do Lighthouse no CI).

<p align="right"><a href="#topo">⬆️ Voltar ao topo</a></p>

## Tech Stacks <a id="4-tech-stacks"></a>

<div align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white" height="30" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=css3&logoColor=white" height="30" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black" height="30" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Java-ED8B00?style=plastic&logo=openjdk&logoColor=white" height="30" alt="Java" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=plastic&logo=docker&logoColor=white" height="30" alt="Docker" />
  <img src="https://github.com/Girls-In-Cortex/soujunior-apoiase-landingpage/actions/workflows/ci.yml/badge.svg" height="30" alt="CI Status" />
</div>


## Deploy <a id ="5-deploy"></a>
**A DEFINIR**

<p align="right"><a href="#topo">⬆️ Voltar ao topo</a></p>

## Como Executar <a id="6-como-executar"></a>

### Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* [Git](https://git-scm.com)
* [Java JDK 17+](https://www.oracle.com/java/technologies/downloads/) (para o backend)

---

### Passo a Passo <a id="7-passo-a-passo"></a>

1. Clonar o repositório:

```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)


cd seu-repositorio

```

Configurar o Backend (.env):

```bash
Crie o arquivo .env na pasta backend/ com base no .env.example e preencha com as credenciais SMTP.
```

Rodar o Backend (Java):

```bash
Execute a classe principal da API Java na sua IDE ou via terminal (mvn clean package e java -jar target/app.jar). O servidor rodará em http://localhost:8080.

``` 

Rodar o Frontend:

```bash
Abra o arquivo frontend/index.html no navegador (ou use a extensão Live Server no VS Code).

```

<p align="right"><a href="#topo">⬆️ Voltar ao topo</a></p>

## Estrutura do Repositório <a id="8-estrutura-do-repositorio"></a>

├── .github/                  # Templates de Issues, PRs e workflows do GitHub 
Actions

├── backend/                  # Script Java para processamento e envio do formulário

├── frontend/                 # Arquivos da interface (HTML, CSS, JS)

├── .env.example              # Modelo de variáveis de ambiente

├── .gitignore                # Arquivos ignorados pelo Git

├── LICENSE                   # Licença do projeto

└── README.md                 # Documentação

<p align="right"><a href="#topo">⬆️ Voltar ao topo</a></p>

## Equipe <a id="9-equipe"></a>

<div align="center">
  <table border="0">
    <tr>
      <td align="center" width="120px">
        <a href="https://github.com/BiaPena-br"><img src="https://github.com/BiaPena-br.png" width="70px" style="border-radius: 50%;" alt="Bianca Pena"/><br><sub><b>Bianca Pena</b></sub><br><sub>Backend</sub><br><sub>Infra/DevOPS</sub></a><br><a href="https://www.linkedin.com/in/bianca-penna/"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      <td align="center" width="120px">
        <a href="https://github.com/JustBruder"><img src="https://github.com/JustBruder.png" width="70px" style="border-radius: 50%;" alt="Nome"/><br><sub><b>Ingrid Bruder (Dazai)</b></sub><br><sub>Backend</sub><br><sub>Segurança/DevSecOps</sub></a><br><a href="https://www.linkedin.com/in/ingrid-bruder"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      <td align="center" width="120px">
        <a href="https://github.com/alananjos06"><img src="https://github.com/alananjos06.png" width="70px" style="border-radius: 50%;" alt="Nome"/><br><sub><b>Alana Anjos</b></sub><br><sub>Front End</sub></a><br><a href="https://linkedin.com/in/alana-anjos-aga222"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
    </tr>
    <tr>
      <td align="center" width="120px">
        <a href="https://github.com/NOME_USUARIO"><img src="https://github.com/NOME_USUARIO.png" width="70px" style="border-radius: 50%;" alt="Nome"/><br><sub><b>Nome 4</b></sub><br><sub>Funcao</sub></a><br><a href="https://linkedin.com/in/SEU-LINKEDIN"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      <td align="center" width="120px">
        <a href="https://github.com/NOME_USUARIO"><img src="https://github.com/NOME_USUARIO.png" width="70px" style="border-radius: 50%;" alt="Nome"/><br><sub><b>Nome 5</b></sub><br><sub>Funcao</sub></a><br><a href="https://linkedin.com/in/SEU-LINKEDIN"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      <td align="center" width="120px">
        <a href="https://github.com/NOME_USUARIO"><img src="https://github.com/NOME_USUARIO.png" width="70px" style="border-radius: 50%;" alt="Nome"/><br><sub><b>Nome 6</b></sub><br><sub>Funcao</sub></a><br><a href="https://linkedin.com/in/SEU-LINKEDIN"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
    </tr>
    <tr>
      <td align="center" width="120px">
        <a href="https://github.com/NOME_USUARIO"><img src="https://github.com/NOME_USUARIO.png" width="70px" style="border-radius: 50%;" alt="Nome"/><br><sub><b>Nome 7</b></sub><br><sub>Funcao</sub></a><br><a href="https://linkedin.com/in/SEU-LINKEDIN"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      <td align="center" width="120px">
        <a href="https://github.com/NOME_USUARIO"><img src="https://github.com/NOME_USUARIO.png" width="70px" style="border-radius: 50%;" alt="Nome"/><br><sub><b>Nome 8</b></sub><br><sub>Funcao</sub></a><br><a href="https://linkedin.com/in/SEU-LINKEDIN"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      <td align="center" width="120px">
        <a href="https://github.com/NOME_USUARIO"><img src="https://github.com/NOME_USUARIO.png" width="70px" style="border-radius: 50%;" alt="Nome"/><br><sub><b>Nome 9</b></sub><br><sub>Funcao</sub></a><br><a href="https://linkedin.com/in/SEU-LINKEDIN"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
    </tr>
  </table>
</div>

<p align="right"><a href="#topo">⬆️ Voltar ao topo</a></p>

## Licença <a id="10-licenca"></a>

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<p align="right"><a href="#topo">⬆️ Voltar ao topo</a></p>
