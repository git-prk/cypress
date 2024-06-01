/// <reference types="cypress" 


describe('validate api', function () {
  it('validate lead', function () {
    function generateRandomPAN() {
      const panChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const panDigits = '0123456789';

      let panNumber = '';
      // First five characters are letters
      for (let i = 0; i < 5; i++) {
        panNumber += panChars.charAt(Math.floor(Math.random() * panChars.length));
      }
      // Next four characters are numbers
      for (let i = 0; i < 4; i++) {
        panNumber += panDigits.charAt(Math.floor(Math.random() * panDigits.length));
      }
      // Last character is a letter
      panNumber += panChars.charAt(Math.floor(Math.random() * panChars.length));

      return panNumber;
    }

    // Example usage:
    const randomPAN = generateRandomPAN();
    console.log(randomPAN); // Output: AAAAA1234Z (example format)
    cy.request({
      method: "POST",
      url: "https://dev-apiorigin.arthmate.com/api/lead",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoxMTQxOTQ4LCJjb21wYW55X2NvZGUiOiJERVgwMDQ2IiwicHJvZHVjdF9pZCI6MTE4MzE2MywidXNlcl9pZCI6Mjg5LCJ1c2VyX25hbWUiOiJBRlggUUEiLCJ0eXBlIjoiYXBpIiwibG9hbl9zY2hlbWFfaWQiOiIxMTgzMTE5IiwiY3JlZGl0X3J1bGVfZ3JpZF9pZCI6bnVsbCwiYXV0b21hdGljX2NoZWNrX2NyZWRpdCI6MCwidG9rZW5faWQiOiIxMTQxOTQ4LTExODMxNjMtMTY3OTM4Njg5MDY3MiIsImVudmlyb25tZW50Ijoic2FuZGJveCIsImlhdCI6MTY3OTM4Njg5MH0.wj__8WxF_DMgYeaVKNO8g1HVxsoiEGmcEnABIt-K__g",
      body: {
        "partner_loan_app_id": "DEXWLOANAPP${Math.floor(Math.random() * 10000) + 1}",
        "partner_borrower_id": "DEXWBOR10002807",
        "appl_pan": randomPAN,
        "first_name": "Amit",
        "last_name": "Pawar",
        "type_of_addr": "Permanent",
        "resi_addr_ln1": "Address",
        "city": "Delhi",
        "state": "Delhi",
        "pincode": "110017",
        "appl_phone": "8987878788",
        "dob": "1980-12-12",
        "gender": "Male"
      }
    })
      .then(function (response) {
        cy.log(response)
      })

  })
})
