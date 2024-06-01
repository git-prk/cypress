    class ornagepage {
        selector = {
            url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
            username: `[name=username]`,
            password: `[name="password"]`,
            submit: `[type="submit"]`
        }

        visiturl() {
            cy.visit(this.selector.url)
        }
        login(userdata){
            cy.get(this.selector.username).type(userdata.username)
            cy.get(this.selector.password).type(userdata.password)
            cy.get(this.selector.submit).click()
        }
    }

    export default ornagepage