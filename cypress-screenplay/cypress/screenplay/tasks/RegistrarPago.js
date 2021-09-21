/// <reference types="cypress" />
import * as BillPaymentsPage from '../ui/BillPaymentsPage';

export function enPagosDeFactura(){
	
	    cy.get(BillPaymentsPage.BOTON_ABRIRBILLPAYMENTSPAGE).click()

        // form
        cy.get(BillPaymentsPage.CAMPO_FIRSTNAME).type("Automation")
        cy.get(BillPaymentsPage.CAMPO_ADDRESS).type("London")
        cy.get(BillPaymentsPage.CAMPO_CITY).type("Greater London")
        cy.get(BillPaymentsPage.CAMPO_STATE).type("London")
        cy.get(BillPaymentsPage.CAMPO_ZIPCODE).type("EY1 20I")
        cy.get(BillPaymentsPage.CAMPO_PHONENUMBER).type("0987654321")
        cy.get(BillPaymentsPage.CAMPO_ACCOUNTNUMBER).type("12345")
        cy.get(BillPaymentsPage.CAMPO_VERIFYACCOUNTNUMBER).type("12345")
        cy.get(BillPaymentsPage.CAMPO_AMOUNT).type("13011 {enter}")

}