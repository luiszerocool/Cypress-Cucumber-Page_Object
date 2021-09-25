/// <reference types="cypress" />

import OverviewPage from "../../page_objects/OverviewPage"
import HomePage from "../../page_objects/HomePage"

const overviewPage = new OverviewPage
const homePage = new HomePage

//background
Given('I open Parabank app', () => {
	homePage.launchApplication()
})
And('I enter the user {string} and pass {string}', (user, pass) => {
	homePage.login(user,pass)
})

//scenario
When('I clicked the Log Out menu', () => {
	overviewPage.logOutFromApplication()
})
Then('I see the login form', () => {
	homePage.logoutResponse()
})


