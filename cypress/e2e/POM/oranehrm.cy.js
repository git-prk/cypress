//// < reference types= 'cypress' />
import mypage from "../../Pages/orangehrm.js"
import data from "../../fixtures/orangehrmdata.json"

 describe('Verify orange hrm login', function() {
    let page = new mypage
    it('Verify login with valid data', function(){
        page.visiturl()
        page.login(data.valid)
        cy.url().should ('contain', '/dashboard/index')

    })

 })