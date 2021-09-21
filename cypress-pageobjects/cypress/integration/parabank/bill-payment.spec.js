/// <reference types="cypress" />

import OverviewPage from "../../page_objects/OverviewPage"
import BillPaymentsPage from "../../page_objects/BillPaymentsPage"
import HomePage from "../../page_objects/HomePage"

const overviewPage = new OverviewPage
const billPaymentsPage = new BillPaymentsPage
const homePage = new HomePage

describe("Page Object - Make Payment",()=>{

    it("Make a correct payment of a bill",()=>{
        homePage.launchApplication()
        homePage.login()
        overviewPage.goToPay()
        billPaymentsPage.enterPayeeDetailsAndPay()
        overviewPage.logOutFromApplication()
    })
})