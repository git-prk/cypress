//// < reference types= "cypress" />
import page from "../../Pages/AutoExe"
import data from "../../fixtures/AutoExe"
describe ('Verify signup', function(){
    let title=undefined
    let pg1= new page
    it('create new user', function(){
        pg1.visiturl()
        pg1.clickbtn(pg1.selector.SignupLogin)
        pg1.newusersignup(data)
        pg1.clickbtn(pg1.selector.signUpBtn)

        
    if(data.title=='Mrs'){
        title=pg1.selector.titleMrs
    }
    else {
        title=pg1.selector.titleMr
    }

    pg1.newusercreate(title,data)
    })

})