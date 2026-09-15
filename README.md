<div id="topo"></div>

<div align="center">

# Landing Page · Apoia.se SouJunior

> Projeto desenvolvido pela equipe **Girls In Cortex** para o Hackathon da **SouJunior**.

<img src="https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white" height="26" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=css3&logoColor=white" height="26" alt="CSS3" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=plastic&logo=javascript&logoColor=black" height="26" alt="JavaScript" />
<img src="https://img.shields.io/badge/Java-ED8B00?style=plastic&logo=openjdk&logoColor=white" height="26" alt="Java" />

</div>

<details>
<summary><b>Sumário</b></summary>

<br>

- [1. Sobre o Projeto](#1-sobre-o-projeto)
- [2. Demonstração](#2-demonstracao)
- [3. Estrutura e Seções da Landing Page](#3-estrutura-e-secoes-da-lp)
- [4. Decisões de Arquitetura](#4-decisoes-de-arquitetura)
- [5. Acessibilidade](#5-acessibilidade)
- [6. Design e Identidade Visual](#6-design-e-identidade-visual)
- [7. Tech Stacks](#7-tech-stacks)
- [8. Como Executar](#8-como-executar)
- [9. Estrutura do Repositório](#9-estrutura-do-repositorio)
- [10. Como Contribuir](#10-como-contribuir)
- [11. Deploy](#11-deploy)
- [12. Equipe](#12-equipe)
- [13. Licença](#13-licenca)

</details>

---

## Sobre o Projeto <a id="1-sobre-o-projeto"></a>

A **SouJunior** é uma comunidade brasileira de tecnologia, mantida por trabalho voluntário, que aproxima profissionais em início de carreira das empresas do setor. A atuação vai muito além de desenvolvimento: são onze frentes, entre elas front-end, back-end, dados, mobile, QA, DevOps, produto, ágil, UX/UI, tech recruiter e social media.

Esta Landing Page foi desenvolvida pela squad **Girls In Cortex** durante o Hackathon SouJunior, com um objetivo único: converter visitante em apoiador da campanha no [Apoia.se](https://apoia.se/soujunior).

### O Problema

A campanha de arrecadação vive hoje no fim de uma página institucional longa, depois de conteúdo sobre a comunidade, áreas de atuação e depoimentos. Ou seja, a conversão para doação é o último item de uma página que não foi construída para converter doação.

Além disso, a página atual não explica para onde o dinheiro vai, e esse é justamente o argumento que convence quem está decidindo apoiar.

### A Solução

Uma página única, construída para conversão, que responde três perguntas na ordem em que elas aparecem na cabeça de quem chega:

1. **O que é a SouJunior**, para quem nunca ouviu falar
2. **Para onde vai o dinheiro**, com prestação de contas em vez de apelo genérico
3. **Quanto custa apoiar**, com o valor de entrada em destaque

O argumento central é que **apoiar é uma das quatro formas oficiais de fazer parte da comunidade**, ao lado de ser mentorado, mentor ou head. Quem doa entra, não ajuda de fora.

### Personas

| Persona | O que a página precisa provar |
|---|---|
| Apoiadora júnior | Que R$ 2,00 fazem diferença real |
| Voluntária e mentora | Que o dinheiro complementa o tempo que ela já doa |
| Empresa e patrocinadora | Números concretos e um canal de contato institucional |

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Demonstração <a id="2-demonstracao"></a>

**Link da página:** _a definir_

**Vídeo de apresentação:** _a definir_

<!-- Inserir aqui o GIF ou capturas de tela do mobile e do desktop -->

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Estrutura e Seções da Landing Page <a id="3-estrutura-e-secoes-da-lp"></a>

A página foi estruturada como uma jornada, conduzindo o visitante da causa até a conversão.

| Âncora | Seção | O que entrega |
|---|---|---|
| `#header` | Cabeçalho | Navegação e CTA sempre acessível |
| `#hero` | Abertura | Responde em 5 segundos por que apoiar, com o CTA principal |
| `#quem-somos` | O que é a SouJunior | Apresenta a comunidade, as áreas de atuação e as quatro formas de participar |
| `#causa` | Para onde vai a doação | Prestação de contas: desenvolvimento, hospedagem e manutenção dos projetos |
| `#impacto` | Impacto | Membros da comunidade, mentores ativos, pessoas empregadas e apoiadores, com dados fornecidos pela organização |
| `#planos` | Escolha um valor | R$ 2, R$ 10 e R$ 25, cada valor traduzido em tempo de infraestrutura no ar, com destaque no valor de entrada |
| `#parceria` | Empresas e patrocínio | Contatos da SouJunior e formulário de proposta institucional, com seleção de tipo de interesse |
| `#cta` | Fechamento | Último pedido de apoio antes do rodapé |
| `#footer` | Rodapé | Apoia.se, Discord, WhatsApp, GitHub e licença |

### Imagens

**A página não usa fotografia.** A decisão é de design e tem três razões: o estilo é chapado, com borda de 2px e sombra sem desfoque, e fotografia brigaria com ele; foto de pessoa da comunidade exigiria autorização individual; e foto de banco de imagem sugeriria que aquelas pessoas são apoiadoras reais, o que contradiz uma página construída sobre transparência.

O que a página usa no lugar:

- **Logo da SouJunior**, em SVG, nas duas versões oficiais
- **Mascotes oficiais da SouJunior**, vindos do UI Kit, sempre como elemento decorativo: entram com `alt` vazio e `aria-hidden`
- **Formas geométricas autorais** em SVG, criadas para o projeto, sem risco de licença

Isso torna a página mais leve, elimina requisições de imagem e remove qualquer dependência de banco de imagem ou de crédito de terceiro.

Se em algum momento for necessário adicionar uma imagem, ela deve ter **no máximo 300 KB** e licença aberta declarada, para não comprometer a performance verificada pelo Lighthouse no CI.

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Decisões de Arquitetura <a id="4-decisoes-de-arquitetura"></a>

### Front-end sem framework

A página é única, com navegação por âncoras nativas. Framework resolve gerenciamento de estado e sincronização de DOM, e nenhum dos dois problemas existe aqui.

HTML, CSS e JavaScript puro entregam uma página mais leve, sem etapa de build, e permitem que qualquer pessoa clone o repositório e comece a trabalhar abrindo o arquivo no navegador. Num time de nove pessoas, várias delas em início de carreira, isso reduz o tempo até a primeira contribuição.

### Design tokens em CSS Variables

Cores, tamanhos de fonte, espaçamentos, raios e espessuras de traço vivem em `tokens.css`. Nenhum valor é escrito solto no código.

Isso permite alterar a identidade visual inteira em um único arquivo, e foi o que possibilitou validar contraste antes de escrever qualquer componente.

### Um arquivo de CSS por seção

O projeto tem nove seções e nove pessoas. Separar o CSS por seção reduz conflito de merge e deixa claro quem responde por qual parte da página.

### O front-end não depende do back-end para renderizar

O back-end existe apenas para receber o formulário de parceria. Se ele estiver indisponível, a página carrega normalmente e apenas o envio do formulário fica fora do ar, com mensagem de erro e canal alternativo de contato.

Nenhum conteúdo da página depende de requisição a servidor.

### Back-end em camadas

O back-end em Java com Spring Boot segue separação por responsabilidade:

| Camada | Arquivo | Responsabilidade |
|---|---|---|
| DTO | `ParceriaRequestDTO` | Formato dos dados e validação declarativa |
| Service | `EmailService` | Sanitização, regras de negócio e envio do e-mail |
| Controller | `ParceriaController` | Exposição da rota e contrato de resposta |
| Filter | `RateLimitFilter` | Limite de requisições por IP |

**Contrato da rota**

```http
POST /parceria
Content-Type: application/json

{
  "nome": "",
  "email": "",
  "interesse": ["patrocinio"],
  "empresa": "",
  "mensagem": ""
}
```

Obrigatórios: `nome`, `email` e `interesse`, que precisa ter pelo menos um item. Opcionais: `empresa` e `mensagem`, que podem chegar vazios ou não chegar.

Valores aceitos em `interesse`: `patrocinio`, `infraestrutura`, `mentoria`, `contratar` e `outra`.

| Status | Corpo | Quando |
|---|---|---|
| `200` | `{ "ok": true }` | Proposta recebida e enviada |
| `400` | `{ "ok": false, "erro": "..." }` | Campo ausente ou inválido |
| `429` | `{ "ok": false, "erro": "..." }` | Limite de requisições excedido |

### Segurança

- Credenciais de e-mail em variáveis de ambiente, nunca no repositório
- `.env` no `.gitignore`, com `.env.example` versionado como modelo
- Sanitização da entrada antes de qualquer processamento
- Limite de requisições por IP na rota do formulário
- CORS restrito à origem do front-end em produção
- Nenhum dado pessoal armazenado: a proposta é encaminhada por e-mail e não persiste em banco

### Limitações conhecidas

- O controle de requisições por IP é mantido em memória, então zera quando o serviço reinicia. Para o escopo deste projeto é suficiente, e a decisão está registrada aqui de forma consciente.
- A primeira chamada ao back-end pode ser mais lenta por conta da inicialização da JVM em ambiente de hospedagem gratuita. O botão de envio exibe estado de carregamento para cobrir esse intervalo.

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Acessibilidade <a id="5-acessibilidade"></a>

Acessibilidade foi tratada como requisito de design, não como revisão final. As decisões abaixo foram tomadas antes da primeira linha de código.

### Contraste calculado antes do layout

Todos os pares de cor usados na página foram calculados antes de entrar no design. Nenhum texto fica abaixo de **4.5:1** e nenhum elemento não textual fica abaixo de **3:1**.

O menor valor em uso é **5.23:1**, no texto secundário sobre o cinza do hero e da causa. O texto do botão principal resulta em **11.22:1**.

A cor de acento âmbar tem uma limitação deliberada: branco sobre ela resulta em 1.83:1. Por isso ela nunca é usada como fundo de botão. A restrição de contraste protege a hierarquia visual por construção, e não por disciplina de quem implementa.

### Navegação e interação

- Foco visível em todo elemento interativo, com anel de 3px e afastamento de 2px
- Alvo de toque mínimo de 48px de altura em botões e campos
- Hierarquia de headings sem pulos, de `h1` a `h4`
- Menu mobile com `aria-expanded`, foco preso enquanto aberto, fechamento por `Esc` e bloqueio da rolagem de fundo
- Cor nunca é o único meio de comunicar estado: erro de formulário tem borda e mensagem de texto
- Rótulo de campo sempre visível, nunca substituído por texto de exemplo dentro do campo
- Grupo de caixas de seleção dentro de `fieldset` com `legend`, para o leitor de tela relacionar as opções à pergunta
- Toda animação respeita `prefers-reduced-motion`
- Elementos decorativos marcados com `aria-hidden`
- Links que saem do domínio sinalizados visualmente e no `aria-label`

### Verificação contínua

O CI roda Lighthouse e validação de HTML a cada pull request. Cada seção é testada por QA assim que entregue, incluindo navegação apenas por teclado, responsividade a partir do mobile e verificação de todos os links.

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Design e Identidade Visual <a id="6-design-e-identidade-visual"></a>

A SouJunior enviou o UI Kit oficial depois do início do projeto. A identidade da página combina o kit com o que já havia sido extraído do código em produção, e cada divergência está documentada no Figma.

Do kit foram adotadas a tipografia, Funnel Display nos títulos e Funnel Sans no texto, e os mascotes oficiais.

A paleta divergiu por contraste, mas a solução veio de dentro do próprio kit: o azul primário, `#3C7EF9`, resulta em 3.79:1 com texto branco e reprova no mínimo de 4.5:1 exigido para texto de corpo. O botão principal usa então a cor Destaque do kit, `#0E14BF`, que resulta em 11.22:1, e o hover usa a Secundária, `#0A1662`, com 16.10:1.

Os títulos mantêm o navy do código em produção da organização, `#00205F`, com 15.31:1 no branco.

| Página do arquivo | O que traz | Link direto |
|---|---|---|
| Identidade Visual | Dois quadros. O primeiro traz a identidade original: procedência de cada valor, cores e tipografia extraídas do repositório oficial da SouJunior, divergências encontradas entre as fontes e o que foi adotado do UI Kit oficial. O segundo traz a identidade adaptada: o que foi criado para a campanha e o raciocínio de cada decisão, com todos os contrastes calculados | [Abrir Identidade Visual](https://www.figma.com/design/RvJORvQXAGGLrSFOFdqO4v/Girls-in-Cortex---Landing-Apoia.se-SouJunior?node-id=0-1) |
| Guia para devs | Tokens, tipografia, espaçamento, componentes e âncoras, em formato de consulta rápida | [Abrir Guia](https://www.figma.com/design/RvJORvQXAGGLrSFOFdqO4v/Girls-in-Cortex---Landing-Apoia.se-SouJunior?node-id=164-2) |
| Wireframe | Estrutura de blocos em baixa fidelidade, mobile e desktop | [Abrir Wireframe](https://www.figma.com/design/RvJORvQXAGGLrSFOFdqO4v/Girls-in-Cortex---Landing-Apoia.se-SouJunior?node-id=174-2) |
| Landing Page | Protótipo final em mobile e desktop, mais o estado aberto do menu | [Abrir Protótipo](https://www.figma.com/design/RvJORvQXAGGLrSFOFdqO4v/Girls-in-Cortex---Landing-Apoia.se-SouJunior?node-id=125-2) |

### O que foi mantido da marca

Logo, paleta de azuis, os mascotes e a tipografia Funnel Display e Funnel Sans, vinda do UI Kit oficial.

### O que foi criado para a campanha

Tom específico do âmbar, escala de espaçamento, raios, espessuras de traço, ritmo de cor entre seções e a anatomia dos componentes.

O kit traz um amarelo de destaque, `#FACC15`. A página usa um âmbar mais quente, `#FFB020`, que convive melhor com o navy das seções escuras. Os dois passam em contraste com texto escuro.

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Tech Stacks <a id="7-tech-stacks"></a>

| Camada | Tecnologias |
|---|---|
| Front-end | HTML5, CSS3 com variáveis nativas, JavaScript ES6+ em módulos |
| Back-end | Java 17, Spring Boot |
| Infra e CI | GitHub Actions, Lighthouse CI, validação de HTML |

Sem framework de front-end, sem biblioteca de CSS e sem etapa de build no front.

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Como Executar <a id="8-como-executar"></a>

### Pré-requisitos

| Para rodar | Você precisa de |
|---|---|
| Apenas o front-end | [Git](https://git-scm.com) e um navegador |
| Front-end e back-end | Git, navegador e [Java JDK 17+](https://www.oracle.com/java/technologies/downloads/) |

O front-end funciona sozinho. O back-end só é necessário para testar o envio do formulário de parceria.

### Passo a passo

**1. Clonar o repositório**

```bash
git clone https://github.com/Girls-In-Cortex/soujunior-apoiase-landingpage.git
cd soujunior-apoiase-landingpage
```

**2. Rodar o front-end**

Abra `frontend/index.html` no navegador, ou use a extensão Live Server no VS Code para recarregar automaticamente ao salvar.

**3. Configurar o back-end**

Crie o arquivo `.env` dentro de `backend/`, usando `.env.example` como modelo, e preencha com as credenciais SMTP.

```bash
cp .env.example backend/.env
```

> O arquivo `.env` está no `.gitignore` e nunca deve ser enviado ao repositório.

**4. Rodar o back-end**

```bash
cd backend
mvn clean package
java -jar target/app.jar
```

O servidor sobe em `http://localhost:8080`.

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Estrutura do Repositório <a id="9-estrutura-do-repositorio"></a>

```
.
├── .github/              # Templates de issue e PR, workflows do GitHub Actions
├── backend/              # API Java (Spring Boot) que recebe, valida e envia o formulário
│   └── src/
├── frontend/             # Interface da landing page
│   ├── index.html
│   └── assets/
│       ├── css/          # tokens.css, base.css e um arquivo por seção
│       ├── js/           # menu, contador do impacto e formulário
│       └── img/
├── .env.example          # Modelo de variáveis de ambiente
├── .gitignore
├── LICENSE
└── README.md
```

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Como Contribuir <a id="10-como-contribuir"></a>

O projeto foi construído de forma assíncrona, com cada pessoa trabalhando no próprio horário.

### Fluxo de trabalho

1. Cada tarefa vira uma issue, com responsável definida
2. Ninguém trabalha direto na `main`. Uma branch por tarefa
3. Todo pull request passa por revisão de outra pessoa antes de entrar
4. Pull request pequeno, uma seção por vez
5. QA testa cada parte assim que fica pronta

### Padrão de commits

O projeto segue [Conventional Commits](https://www.conventionalcommits.org/pt-br/):

```
feat: adiciona seção de planos
fix: corrige contraste do botão secundário
docs: atualiza instruções de execução
style: ajusta espaçamento do cabeçalho
```

### Regras de código

- Sempre usar as variáveis de `tokens.css`, nunca valor solto
- Mexer apenas na própria seção, delimitada por comentário no HTML
- Nenhuma chave ou senha no repositório, sempre em variável de ambiente
- Antes de adicionar qualquer dependência, discutir com o time

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Deploy <a id="11-deploy"></a>

| Camada | Onde | Status |
|---|---|---|
| Front-end | _a definir_ | _a definir_ |
| Back-end | _a definir_ | _a definir_ |

Front-end e back-end são publicados em serviços separados. O back-end libera CORS apenas para a origem do front-end, e ambos rodam sob HTTPS.

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Equipe <a id="12-equipe"></a>

<div align="center">
  <table border="0">
    <tr>
      <td align="center" width="120px">
        <a href="https://github.com/BiaPena-br"><img src="https://github.com/BiaPena-br.png" width="70px" style="border-radius: 50%;" alt="Bianca Pena"/><br><sub><b>Bianca Pena</b></sub><br><sub>Back-end</sub><br><sub>Infra e DevOps</sub></a><br><a href="https://www.linkedin.com/in/bianca-penna/"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      <td align="center" width="120px">
        <a href="https://github.com/JustBruder"><img src="https://github.com/JustBruder.png" width="70px" style="border-radius: 50%;" alt="Ingrid Bruder"/><br><sub><b>Ingrid Bruder</b></sub><br><sub>Back-end</sub><br><sub>Segurança</sub></a><br><a href="https://www.linkedin.com/in/ingrid-bruder"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      <td align="center" width="120px">
        <a href="https://github.com/SamaraAlanna"><img src="https://github.com/SamaraAlanna.png" width="70px" style="border-radius: 50%;" alt="Samara Alanna"/><br><sub><b>Samara Alanna</b></sub><br><sub>UX/UI</sub><br><sub>Design System</sub></a><br><a href="https://www.linkedin.com/in/samaraalanna/"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      </tr>
    <tr>
      <td align="center" width="120px">
        <a href="https://github.com/alananjos06"><img src="https://github.com/alananjos06.png" width="70px" style="border-radius: 50%;" alt="Alana Anjos"/><br><sub><b>Alana Anjos</b></sub><br><sub>Front-end</sub></a><br><a href="https://linkedin.com/in/alana-anjos-aga222"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      <td align="center" width="120px">
        <a href="https://github.com/mariasoaresv"><img src="https://github.com/mariasoaresv.png" width="70px" style="border-radius: 50%;" alt="Nome"/><br><sub><b>Maria Soares</b></sub><br><sub>Front-end</sub></a><br><a href="https://linkedin.com/in/maria-fernanda-soares-silva"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      <td align="center" width="120px">
        <a 
href="https://github.com/Gasparini-11"><img src="https://github.com/gasparini-11.png" width="70px" style="border-radius: 50%;" alt="Rafaella Gasparini"/><br><sub><b>Rafaella Gasparini</b></sub><br><sub>Front-End</sub></a><br><a href="https://www.linkedin.com/in/rafaella-de-jesus-gasparini"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      </tr>
    <tr>
      <td align="center" width="120px">
        <a href="https://github.com/kamathias89"><img src="https://github.com/kamathias89.png" width="70px" style="border-radius: 50%;" alt="Nome"/><br><sub><b>Karina Mathias</b></sub><br><sub>QA</sub></a><br><a href="https://www.linkedin.com/in/kamathias/"><img src="https://img.shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
      </td>
      <td align="center" width="120px">
        <a href="https://github.com/paulahcarvalho"><img src="https://github.com/paulahcarvalho.png" width="70px" style="border-radius: 50%;" alt="Paula Carvalho"/><br><sub><b>Paula Carvalho</b></sub><br><sub>PO/PM Júnior</sub></a><br><a href="https://linkedin.com/in/paula-carvalho-390147108/"><img src="https://shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
</a>
  </td>
      <td align="center" width="120px">
        <a href="https://github.com/eucarolsevero"><img src="https://github.com/eucarolsevero.png" width="70px" style="border-radius: 50%;" alt="Carol Severl"/><br><sub><b>Carol Severo</b></sub><br><sub>Mentora</sub></a><br><a href="https://www.linkedin.com/in/eucarolsevero"><img src="https://shields.io/badge/LinkedIn-blue?style=flat&logo=linkedin" height="15px"/></a>
</td>
    </tr>
      </td>
    </tr>
  </table>
</div>

<p align="right"><a href="#topo">Voltar ao topo</a></p>

---

## Licença <a id="13-licenca"></a>

Distribuído sob a licença MIT. Veja [`LICENSE`](LICENSE) para mais informações.

<p align="right"><a href="#topo">Voltar ao topo</a></p>
