/// <reference types="cypress" />
import BillPaymentsPage from "../../page_objects/BillPaymentsPage"
import HomePage from "../../page_objects/HomePage"

const billPaymentsPage = new BillPaymentsPage
const homePage = new HomePage

describe("Page Object - Make Payment",()=>{

    it("Make a correct payment of a bill",()=>{
        homePage.launchApplication()
        homePage.login('john','demo')
        billPaymentsPage.enterPayeeDetailsAndPay()
        billPaymentsPage.payResponse('Bill Payment Complete')
    })
})