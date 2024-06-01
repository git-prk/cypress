describe('YouTube Shorts Test', () => {
    it('Should open YouTube and click on Shorts', () => {
      // Visit YouTube
      cy.visit('https://www.youtube.com/');
  
      // Wait for the navigation bar to load
      cy.get('#masthead').should('be.visible');
  
      // Click on the "More" button to reveal additional options
      cy.get('button[aria-label="More"]').click();
  
      // Wait for the menu to expand
      cy.get('#items').should('be.visible');
  
      // Click on the "Shorts" option
      cy.contains('Shorts').click();
  
      // Wait for the Shorts page to load
      cy.url().should('include', '/shorts');
      cy.contains('Your short video destination').should('be.visible');
    });
  });
  