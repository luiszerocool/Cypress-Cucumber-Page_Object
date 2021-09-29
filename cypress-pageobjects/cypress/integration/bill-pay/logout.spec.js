/// <reference types="cypress" />
import OverviewPage from "../../page_objects/OverviewPage"
import HomePage from "../../page_objects/HomePage"

const overviewPage = new OverviewPage
const homePage = new HomePage

describe("Page Object - Logout of the Parabank App",()=>{

    it("Make a correct logout of the app",()=>{
        homePage.launchApplication()
        homePage.login('john','demo')
        overviewPage.logOutFromApplication()
        homePage.logoutResponse()
    })
})