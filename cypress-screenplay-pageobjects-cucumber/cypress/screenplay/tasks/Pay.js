/// <reference types="cypress" />
import * as BillPaymentsPage from '../screen/BillPaymentsPage';
import * as OverviewPage from '../screen/OverviewPage';

export function theBill(billData) {
        billData.hashes().forEach(element => {

                cy.get(OverviewPage.BILL_PAY_LINK).click()

                cy.get(BillPaymentsPage.FIRSTNAME_FIELD).type(element.firstname)
                cy.get(BillPaymentsPage.ADDRESS_FIELD).type(element.address)
                cy.get(BillPaymentsPage.CITY_FIELD).type(element.city)
                cy.get(BillPaymentsPage.STATE_FIELD).type(element.state)
                cy.get(BillPaymentsPage.ZIPCODE_FIELD).type(element.zipcode)
                cy.get(BillPaymentsPage.PHONENUMBER_FIELD).type(element.phonenumber)
                cy.get(BillPaymentsPage.ACCOUNTNUMBER_FIELD).type(element.accountnumber)
                cy.get(BillPaymentsPage.VERIFYACCOUNTNUMBER_FIELD).type(element.verifyaccountnumber)
                cy.get(BillPaymentsPage.AMOUNT_FIELD).type(element.amount + '{enter}')
        })
}