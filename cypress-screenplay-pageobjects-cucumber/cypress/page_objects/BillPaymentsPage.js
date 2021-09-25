/// <reference types="cypress" />
import OverviewPage from './OverviewPage'

const overviewPage = new OverviewPage

class BillPaymentsPage {
    enterPayeeDetailsAndPay(billData) {
        billData.hashes().forEach(element => {
            //navigate to bill payments page
            overviewPage.goToPay()
            //enter data into form
            cy.get(':nth-child(1) > [width="20%"] > .input').type(element.firstname)
            cy.get(':nth-child(2) > [width="20%"] > .input').type(element.address)
            cy.get(':nth-child(3) > [width="20%"] > .input').type(element.city)
            cy.get(':nth-child(4) > [width="20%"] > .input').type(element.state)
            cy.get(':nth-child(5) > [width="20%"] > .input').type(element.zipcode)
            cy.get(':nth-child(6) > [width="20%"] > .input').type(element.phonenumber)
            cy.get(':nth-child(8) > :nth-child(2) > .input').type(element.accountnumber)
            cy.get(':nth-child(9) > [width="20%"] > .input').type(element.verifyaccountnumber)
            cy.get(':nth-child(11) > [width="20%"] > .input').type(element.amount + '{enter}')
        })
    }
    payResponse(resultMessage){
         //verify result
         cy.get('[ng-show="showResult"] > .title').should("have.text", resultMessage).and('be.visible')
    }
}

export default BillPaymentsPage