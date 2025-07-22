# banco-web-tests

Este projeto tem como objetivo demonstrar para os alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress e JavaScript, seguindo boas práticas de organização e documentação.

## Objetivo
Automatizar cenários de testes para a aplicação banco-web, validando funcionalidades como login e transferência, utilizando Cypress. O projeto serve como referência para alunos aprenderem automação de testes end-to-end.

## Componentes do Projeto
- **Cypress**: Framework principal de automação de testes.
- **Custom Commands**: Comandos personalizados para facilitar e organizar a automação (localizados em `cypress/support/commands/`).
- **Relatórios**: Gerados automaticamente com o `cypress-mochawesome-reporter` (saída em `cypress/reports/html/`).
- **Testes**: Scripts de teste em `cypress/e2e/` para cenários de login e transferência.
- **Fixtures**: Dados de apoio para os testes em `cypress/fixtures/`.

## Pré-requisitos
- Node.js instalado
- Clonar e executar a [banco-api](https://github.com/juliodelimas/banco-api) e a [banco-web](https://github.com/juliodelimas/banco-web)

## Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes
1. Certifique-se de que a API e a aplicação web estejam rodando.
2. Execute os testes:
   ```bash
   npx cypress open
   # ou para execução headless e geração de relatório
   npx cypress run --reporter cypress-mochawesome-reporter
   ```
3. Os relatórios serão gerados em `cypress/reports/html/index.html`.

## Estrutura dos Testes
- `cypress/e2e/login.cy.js`: Testes de login na aplicação.
- `cypress/e2e/transferencia.cy.js`: Testes de transferência entre contas.
- `cypress/fixtures/`: Dados de teste (ex: credenciais).

## Custom Commands
Os comandos personalizados estão organizados em:
- `cypress/support/commands/common.js`: Comandos genéricos reutilizáveis.
- `cypress/support/commands/login.js`: Comandos para automação de login.
- `cypress/support/commands/transferencia.js`: Comandos para automação de transferência.

Para utilizar um Custom Command, basta chamá-lo nos scripts de teste, por exemplo:
```js
cy.login('usuario', 'senha')
```

## Relatórios
Após a execução dos testes, acesse o relatório em:
```
cypress/reports/html/index.html
```

## Contribuição
Sinta-se livre para abrir issues ou pull requests para melhorias.

---
Mentoria 2.0 | Automação de Testes com Cypress