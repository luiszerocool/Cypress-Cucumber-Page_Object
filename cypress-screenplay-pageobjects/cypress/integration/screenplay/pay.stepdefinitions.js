/// <reference types="cypress" />

import * as Open from '../../screenplay/tasks/Open'
import * as Login from '../../screenplay/tasks/Login'
import * as Pay from '../../screenplay/tasks/Pay'
import * as PayResponse from '../../screenplay/questions/PayResponse'

describe('Screenplay - Make Payment', () => {

	it('Make a correct payment of a bill', () => {
		Open.theHomePage()
		Login.toTheUserPageWith("john", "demo")
		Pay.theBill()
		PayResponse.ofTheBillIs("Bill Payment Complete")
	});

});