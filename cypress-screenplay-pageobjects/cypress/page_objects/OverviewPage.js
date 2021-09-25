/// <reference types="cypress" />

class OverviewPage {
    goToPay(){
        cy.get('#leftPanel > ul > :nth-child(4) > a').click()
    }
    logOutFromApplication(){
        cy.contains('Log Out').click()
    }
}

export default OverviewPage