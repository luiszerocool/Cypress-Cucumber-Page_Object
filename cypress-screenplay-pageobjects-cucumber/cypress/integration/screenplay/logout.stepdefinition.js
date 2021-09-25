/// <reference types="cypress" />

import * as Open from '../../screenplay/tasks/Open'
import * as Login from '../../screenplay/tasks/Login'
import * as Logout from '../../screenplay/tasks/Logout'
import * as LogoutResponse from '../../screenplay/questions/LogoutResponse'

//background

Given('I open Parabank app', () => {
	Open.theHomePage()
})
And('I enter the user {string} and pass {string}', (user, pass) => {
	Login.toTheUserPageWith(user, pass)
})

//scenario
When('I clicked the Log Out menu', () => {
	Logout.linkClick()
})
Then('I see the login form', () => {
	LogoutResponse.ofUserSession()
})


