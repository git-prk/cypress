/// <reference types ="cypress"/>

describe('create lead', function(){
    it('create book', function(){
        let ID1 = undefined;
        const randomISBN = Math.floor(Math.random() * 1000000000000);
        cy.request({
            method: "POST",
            url: "https://rahulshettyacademy.com/Library/Addbook.php",
            body: {
                "name": "Learn Appium Automation with Java",
                "isbn":  randomISBN.toString(),
                "aisle": "220977",
                "author": "John foe"
            }
        }).then(function(response){
            expect(response.status).to.eq(200);
            cy.log(response);
            cy.log(response.body.ID);
            ID1 = response.body.ID;
        })
        .then(function(){
            cy.wait(2000); 
            cy.request({
                method: "GET",
                url: 'https://rahulshettyacademy.com/Library/GetBook.php?ID=' + ID1
            }).then(function(res){
                cy.log(res);
            });
        });
    });
});