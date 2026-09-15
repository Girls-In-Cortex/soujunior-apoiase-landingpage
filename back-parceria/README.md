# Back-end - Formulário de Parceria (Girls-In-Cortex)

## Tecnologias Utilizadas
- **Java** (versão 17+)
- **Spring Boot** (Spring Web, Spring Validation, Spring Mail)
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
4. **Envio de E-mail Resiliente:** Estruturado com `JavaMailSender` para integração SMTP real, possuindo um tratamento de exceções com fallback local que simula o envio no console para evitar falhas de servidor (HTTP 500) durante os testes de desenvolvimento.

---

## Como Executar o Projeto no Linux Mint

1. Abra o terminal integrado do VS Code e navegue até a pasta do back-end:
   ```bash
   cd back-parceria
2. Conceda permissão de execução ao Maven wrapper (necessário apenas na . primeira execução):
   ```bash
   chmod +x mvnw
3. Inicie o servidor da aplicação:
   ```bash
   ./mvnw spring-boot:run
4. O servidor Spring Boot será inicializado na porta padrão 8080 do localhost.