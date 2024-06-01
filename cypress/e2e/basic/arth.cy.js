









/// <reference types="cypress" />


// test scenario - 1
describe('validate the login functionality',function(){

    // test case 1
    it('login with valid crendentials',function(){
  
        // arrangement 
        cy.visit('https://dev-origin.arthmate.com/login')
        // actions
        cy.get('input[type="text"][placeholder="Enter email id"]').type('afx@arthmate.com');
        cy.get('input[type="password"][placeholder="Enter password"]').type('password@123');
        cy.get('#1').click(); 
        cy.contains('.title-name','LOS'). click();
        cy.get('#dropdowm-menu-1').select('Python')
        
        })
    })
     
  
  
  
  
  
  
  
  
  
  
  
  // cy.get('.sidebar-item').click({multiple:true});
  // cy.get('.combined-menu-colored-container').click({multiple:true});
  //  cy.get('.sidebar-title-highlited');
  //  cy.get('.selected-title-name').click();
  //  cy.get('.single-container-sidebar');
  
  //  // Assert that the element with class "xyz" is visible
  //  cy.get('.head-selected').click();