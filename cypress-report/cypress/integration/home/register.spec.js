/// <reference types="cypress" />

describe('register new user', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  })

  it('register correct', () => {
    cy.get('#loginPanel > form > div:nth-child(2) > input').type("john")
    cy.get('#loginPanel > form > div:nth-child(4) > input').type("demo {enter}")
    cy.get('#leftPanel > p').should('have.text', 'Welcome John Smith')
  })

})
