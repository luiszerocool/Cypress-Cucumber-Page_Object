/// <reference types="cypress" />

import * as Open from '../../screenplay/tasks/Open'
import * as Login from '../../screenplay/tasks/Login'
import * as Logout from '../../screenplay/tasks/Logout'
import * as Pay from '../../screenplay/tasks/Pay'
import * as PaymentResponse from '../../screenplay/questions/PaymentResponse'

describe('Screenplay - Make Payment', () => {
	
  it('Make a correct payment of a bill', () => {
	//task
    Open.theHomePage()
	Login.toTheUserPageWith("john", "demo")
	Pay.theBill()
	//question
	PaymentResponse.ofTheBillIs("Bill Payment Complete")
	//task
	Logout.fromApplication()
  });

});