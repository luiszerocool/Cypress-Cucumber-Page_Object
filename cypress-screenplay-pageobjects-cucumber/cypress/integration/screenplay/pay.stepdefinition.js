/// <reference types="cypress" />

import * as Open from '../../screenplay/tasks/Open'
import * as Login from '../../screenplay/tasks/Login'
import * as Pay from '../../screenplay/tasks/Pay'
import * as PayResponse from '../../screenplay/questions/PayResponse'

//background

Given('I open Parabank app', () => {
	Open.theHomePage()
})
And('I enter the user {string} and pass {string}', (user, pass) => {
	Login.toTheUserPageWith(user, pass)
})

//scenario
When('I clicked the Bill Pay menu and enter the bill data', (billData) => {
	Pay.theBill(billData)
})
Then('I see {string} in the message', (resultMessage) => {
	PayResponse.ofTheBillIs(resultMessage)
})


