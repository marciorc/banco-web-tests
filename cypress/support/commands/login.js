Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
    cy.fixture('credenciais').then(credendiais => {
      cy.get('#username').click().type(credendiais.valida.usuario)
      cy.get('#senha').click().type(credendiais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('fazerLoginComCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then(credendiais => {
      cy.get('#username').click().type(credendiais.invalida.usuario)
      cy.get('#senha').click().type(credendiais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
})