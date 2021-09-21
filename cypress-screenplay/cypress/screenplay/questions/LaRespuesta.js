import * as BillPaymentsPage from '../ui/BillPaymentsPage';

export function alRegistroDelPagoDeFacturaEs(){
	cy.get(BillPaymentsPage.CAMPO_RESULT).should("have.text","Bill Payment Complete")
}