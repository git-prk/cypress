/// <reference types="cypress" />


// test scenario - 1
describe('validate the login functionality',function(){

    // test case 1
    it('login with valid crendentials',function(){

        // arrangement  
        cy.visit('http://3.108.186.63/')
        // actions
        //  // Find the input field by its name attribute
        //     cy.get('input[name="userName"]').type('admin');
        //     cy.get('input[name="password"]').type('Kapital@123');
            
            cy.get('input[name="userName"]').type('AFX_Pranita');
            cy.get('input[name="password"]').type('oUdFb0g8hV');
            cy.get('button[type="submit"].block-button').contains('Log in').click();
            cy.get('input[name="state"]').click();
           // cy.get('input[name="state"]') // Assuming the dropdown options are listed under ul
            cy.get('input[name="state"]')  .click({ multiple: true }).should('have.value', 'Your Desired State'); 
            cy.contains('button', 'Pranita').click();
            cy.contains('div', ' Log out').click();          
          });
        });
       
      