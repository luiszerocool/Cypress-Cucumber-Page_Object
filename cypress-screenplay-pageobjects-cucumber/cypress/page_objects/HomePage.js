/// <reference types="cypress" />

class HomePage{
    launchApplication(){
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    }
    login(user, pass){
        cy.get(':nth-child(2) > .input').type(user)
        cy.get(':nth-child(4) > .input').type(pass + '{enter}')
    }
    logoutResponse(){
        cy.get(':nth-child(2) > .input').should('be.visible')
    }
}

export default HomePage