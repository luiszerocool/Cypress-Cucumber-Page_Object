/// <reference types="cypress" />

describe('bill payment', () => {

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type("john")
    cy.get('#loginPanel > form > div:nth-child(4) > input').type("demo {enter}")
  })


  it('bill payment correct', () => {
    cy.get('#leftPanel > ul > :nth-child(4) > a').click()//navigate to bill payments page
    cy.get(':nth-child(1) > [width="20%"] > .input').type("Automation")//first name
    cy.get(':nth-child(2) > [width="20%"] > .input').type("London")//adress
    cy.get(':nth-child(3) > [width="20%"] > .input').type("Greater London")//city
    cy.get(':nth-child(4) > [width="20%"] > .input').type("London")//state
    cy.get(':nth-child(5) > [width="20%"] > .input').type("EY1 20I")//zipcode
    cy.get(':nth-child(6) > [width="20%"] > .input').type("0987654321")//phone number
    cy.get(':nth-child(8) > :nth-child(2) > .input').type("12345")//account number
    cy.get(':nth-child(9) > [width="20%"] > .input').type("12345")//verify account number
    cy.get(':nth-child(13) > :nth-child(2) > .input').type('13011')//from account number
    cy.get(':nth-child(11) > [width="20%"] > .input').type("100 {enter}")//amount

    cy.get('[ng-show="showResult"] > .title').should("have.text","Bill Payment Complete")//verify result
    
  })

})
