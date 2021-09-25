/// <reference types="cypress" />
import * as BillPaymentsPage from '../screen/BillPaymentsPage';
import * as OverviewPage from '../screen/OverviewPage';

export function theBill(){
	cy.get(OverviewPage.BILL_PAY_LINK).click()
        // form
        cy.get(BillPaymentsPage.FIRSTNAME_FIELD).type("Automation")
        cy.get(BillPaymentsPage.ADDRESS_FIELD).type("London")
        cy.get(BillPaymentsPage.CITY_FIELD).type("Greater London")
        cy.get(BillPaymentsPage.STATE_FIELD).type("London")
        cy.get(BillPaymentsPage.ZIPCODE_FIELD).type("EY1 20I")
        cy.get(BillPaymentsPage.PHONENUMBER_FIELD).type("0987654321")
        cy.get(BillPaymentsPage.ACCOUNTNUMBER_FIELD).type("12345")
        cy.get(BillPaymentsPage.VERIFYACCOUNTNUMBER_FIELD).type("12345")
        cy.get(BillPaymentsPage.AMOUNT_FIELD).type("13011 {enter}")
}