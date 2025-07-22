describe('Transferências', () => {
    beforeEach(()=> {
        cy.visit('/')
        cy.fixture('credenciais').then(credendiais => {
            cy.get('#username').click().type(credendiais.valida.usuario)
            cy.get('#senha').click().type(credendiais.valida.senha)
        })
        cy.contains('button', 'Entrar').click()
    })
    it('Deve transferir quando informo dados e valor válidos', () => {
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains('Maria Oliveira com saldo de R$').click()

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('João da Silva com saldo de R$').click()

        cy.get('#valor').click().type('11')

        cy.contains('button', 'Transferir').click()
        cy.get('.toast').should('have.text', 'Transferência realizada!')
    })
})