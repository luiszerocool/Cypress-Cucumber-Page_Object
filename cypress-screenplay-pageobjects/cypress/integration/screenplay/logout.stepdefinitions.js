/// <reference types="cypress" />

import * as Open from '../../screenplay/tasks/Open'
import * as Login from '../../screenplay/tasks/Login'
import * as Logout from '../../screenplay/tasks/Logout'
import * as LogoutResponse from '../../screenplay/questions/LogoutResponse'

describe('Screenplay - Logout of the Parabank App', () => {

	it('Make a correct logout of the app', () => {
		Open.theHomePage()
		Login.toTheUserPageWith("john", "demo")
		Logout.linkClick()
		LogoutResponse.ofUserSession()
	});

});