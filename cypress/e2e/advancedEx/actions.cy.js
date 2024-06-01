/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/actions')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('.type() - type into a DOM element', () => {
      // https://on.cypress.io/type
      cy.get('.action-email').type('fake@email.com')
      cy.get('.action-email').should('have.value', 'fake@email.com')
  
      // .type() with special character sequences
      cy.get('.action-email').type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      cy.get('.action-email').type('{del}{selectall}{backspace}')

        // .type() with special character sequences
    cy.get('.action-email').type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
    cy.get('.action-email').type('{del}{selectall}{backspace}')


    })
})