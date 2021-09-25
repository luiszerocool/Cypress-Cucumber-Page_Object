import * as BillPaymentsPage from '../screen/BillPaymentsPage';

export function ofTheBillIs(thePhrase){
	cy.get(BillPaymentsPage.RESULT_LABEL).should("have.text", thePhrase)
}