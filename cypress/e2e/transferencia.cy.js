describe('Transferências', () => {
    beforeEach(()=> {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor válidos', () => {
        // Act
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '11')

        // Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        // Act
        cy.realizarTransferencia('Maria Oliveira', 'João da Silva', '5001')

        // Assert 
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})