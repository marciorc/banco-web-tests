describe('Login', () => {

  beforeEach(() => {
    // Arrange
    cy.visit('http://localhost:4000')
    cy.screenshot('apos-visitar-a-pagina-de-login')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    
    // Act
    cy.fixture('credenciais').then(credendiais => {
      cy.get('#username').click().type(credendiais.valida.usuario)
      cy.get('#senha').click().type(credendiais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {

    // Act
    cy.fixture('credenciais').then(credendiais => {
      cy.get('#username').click().type(credendiais.invalida.usuario)
      cy.get('#senha').click().type(credendiais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()

    // Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})