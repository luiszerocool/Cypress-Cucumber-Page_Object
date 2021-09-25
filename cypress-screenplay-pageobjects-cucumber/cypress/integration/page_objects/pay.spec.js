/// <reference types="cypress" />

import BillPaymentsPage from "../../page_objects/BillPaymentsPage"
import HomePage from "../../page_objects/HomePage"

const billPaymentsPage = new BillPaymentsPage
const homePage = new HomePage

//background
Given('I open Parabank app', () => {
	homePage.launchApplication()
})
And('I enter the user {string} and pass {string}', (user, pass) => {
	homePage.login(user,pass)
})

//scenario
When('I clicked the Bill Pay menu and enter the bill data', (billData) => {
	billPaymentsPage.enterPayeeDetailsAndPay(billData)
})
Then('I see {string} in the message', (resultMessage) => {
	billPaymentsPage.payResponse(resultMessage)
})


