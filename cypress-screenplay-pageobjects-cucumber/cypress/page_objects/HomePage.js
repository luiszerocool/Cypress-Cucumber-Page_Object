/// <reference types="cypress" />

class HomePage{
    launchApplication(){
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    }

    login(){
        cy.get(':nth-child(2) > .input').type("john")
        cy.get(':nth-child(4) > .input').type("demo {enter}")
    }

}

export default HomePage