/// <reference types="cypress" />
import OverviewPage from './OverviewPage'

const overviewPage = new OverviewPage

class BillPaymentsPage {
    enterPayeeDetailsAndPay(){
        //navigate to bill payments page
        overviewPage.goToPay()
        //enter data into form
        cy.get(':nth-child(1) > [width="20%"] > .input').type("Automation")//first name
        cy.get(':nth-child(2) > [width="20%"] > .input').type("London")//adress
        cy.get(':nth-child(3) > [width="20%"] > .input').type("Greater London")//city
        cy.get(':nth-child(4) > [width="20%"] > .input').type("London")//state
        cy.get(':nth-child(5) > [width="20%"] > .input').type("EY1 20I")//zipcode
        cy.get(':nth-child(6) > [width="20%"] > .input').type("0987654321")//phone number
        cy.get(':nth-child(8) > :nth-child(2) > .input').type("12345")//account number
        cy.get(':nth-child(9) > [width="20%"] > .input').type("12345")//verify account number
        cy.get(':nth-child(11) > [width="20%"] > .input').type("100 {enter}")//amount
    }
    payResponse(resultMessage){
        //verify result
        cy.get('[ng-show="showResult"] > .title').should("have.text", resultMessage).and('be.visible')
   }
}

export default BillPaymentsPage