Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestinho, valor) => {
    cy.selecionarOpcaoNaCombobox('conta-origem', contaOrigem)
    cy.selecionarOpcaoNaCombobox('conta-destino', contaDestinho)
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
})