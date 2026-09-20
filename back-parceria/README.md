# Back-end - Formulário de Parceria (Girls-In-Cortex)

## Tecnologias Utilizadas
- **Java** (versão 17+)
- **Spring Boot** (Spring Web, Spring Validation)
- **Google Gmail API Client** (com suporte a OAuth 2.0)
- **Maven** (Gerenciador de dependências e build)

---

## Arquitetura e Estrutura do Projeto
O projeto está organizado em camadas bem definidas para garantir modularidade e facilidade de manutenção:
- **`controller/`**: Contém o `ParceriaController`, responsável por expor a rota HTTP da API e acionar as validações iniciais.
- **`dto/`**: Contém o `ParceriaRequestDTO`, que mapeia e valida o contrato de dados enviado pelo front-end.
- **`service/`**: Contém o `EmailService`, centralizando as regras de negócio, a sanitização dos dados textuais e o gerenciamento do envio de e-mails.
- **`config/`**: Contém o `RateLimitFilter`, responsável pelas regras de segurança e controle de fluxo de requisições.

---

## Funcionalidades e Requisitos Implementados
1. **Rota POST `/parceria`:** Endpoint configurado para receber os dados de propostas de parceria corporativa (nome da empresa, contato, e-mail corporativo, tipo de apoio e mensagem).
2. **Validação e Sanitização:** Utiliza anotações do Bean Validation (`@NotBlank`, `@Email`, `@Size`) para barrar dados incorretos no DTO e aplica rotinas de sanitização no service para prevenir entradas maliciosas (XSS).
3. **Controle de Taxa por IP (Rate Limiting):** Implementa um filtro baseado em `ConcurrentHashMap` que restringe o número máximo de requisições permitidas por endereço IP em uma janela de tempo, protegendo a aplicação contra spam e sobrecargas.
4. **Envio de E-mail Resiliente via API REST:** Estruturado com a biblioteca oficial da Gmail API e protocolo OAuth 2.0 (Access/Refresh Tokens), realizando o envio de e-mails diretamente por requisições HTTP/HTTPS (Porta 443). Essa arquitetura elimina os gargalos e bloqueios de rede comuns em conexões SMTP tradicionais (portas 587/465) em ambientes de nuvem como o Render, contando com tratamento de exceções para garantir a estabilidade do servidor e tratamento adequado de requisições.

---

## Como Executar o Projeto no Linux Mint

1. Abra o terminal integrado do VS Code e navegue até a pasta do back-end:
   ```bash
   cd back-parceria
2. Crie um arquivo .env na raiz da pasta com as credenciais da Gmail API:
   ```bash
   Use as credenciais de modelo contidas no arquivo .env.example
3. Conceda permissão de execução ao Maven wrapper (necessário apenas na . primeira execução):
   ```bash
   chmod +x mvnw
4. Inicie o servidor da aplicação:
   ```bash
   ./mvnw spring-boot:run
5. O servidor Spring Boot será inicializado na porta padrão 8080 do localhost.