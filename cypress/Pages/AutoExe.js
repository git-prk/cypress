export default class autosel {
    selector = {
        AutoURL : 'https://www.automationexercise.com/',
        SignupLogin: 'a[href="/login"]',
        signUpBtn : '[data-qa="signup-button"]',
        signupName: '[name="name"]',
        signupemail: '[data-qa="signup-email"]',
        titleMr: '[id="id_gender1"]',
        titleMrs: '[id="id_gender2"]',
        password: '[id="password"]',
        dd : '[id="days"]',
        mm : '[id="months"]',
        yy : '[id="years"]',
        fname: '[data-qa="first_name"]',
        lname: '[data-qa="last_name"]',
        company:'[data-qa="company"]',
        address1 : '[id="address1"]',
        address2 : '[id="address2"]',
        country: '[data-qa="country"]',
        state: '[data-qa="state"]',
        city: '[data-qa="city"]',
        zipcode: '[data-qa="zipcode"]',
        mobno:'[data-qa="mobile_number"]',
        createaccbutn:'[data-qa="create-account"]'
    

    }

    visiturl(){
        cy.visit(this.selector.AutoURL)
    }

    clickbtn(css){
        cy.get(css).click()

    }

newusersignup(data){
    cy.get(this.selector.signupName).type(data.signupName)
    cy.get(this.selector.signupemail).type(data.signupemail)
}

newusercreate(title,data){
    cy.get(title).check()
    cy.get(this.selector.password).type(data.password)
    cy.get(this.selector.dd).type(data.dd)
    cy.get(this.selector.mm).type(data.mm)
    cy.get(this.selector.yy).type(data.yy)
    cy.get(this.selector.fname).type(data.fname)
    cy.get(this.selector.lname).type(data.lname)
    cy.get(this.selector.company).type(data.company)
    cy.get(this.selector.address1).type(data.address1)
    cy.get(this.selector.address2).type(data.address2)
    cy.get(this.selector.country).type(data.country)
    cy.get(this.selector.state).type(data.state)
    cy.get(this.selector.city).type(data.city)
    cy.get(this.selector.zipcode).type(data.zipcode)
    cy.get(this.selector.mobno).type(data.mobno)
    cy.get(this.selector.createaccbutn).click()






}

}
