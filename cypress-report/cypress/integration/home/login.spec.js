/// <reference types="cypress" />

describe('login to app', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  })

  it('login correct', () => {
    cy.get('#loginPanel > form > div:nth-child(2) > input').type("john")
    cy.get('#loginPanel > form > div:nth-child(4) > input').type("demo {enter}")
    cy.get('#leftPanel > p').should('have.text', 'Welcome John Smith')
  })

  it('login incorrect', () => {
    cy.get('#loginPanel > form > div:nth-child(2) > input').type("john2")
    cy.get('#loginPanel > form > div:nth-child(4) > input').type("demo2 {enter}")
    cy.get('#rightPanel > p').should('have.text', 'The username and password could not be verified.')
  })

  it('take a screenshot of test', () => {
    cy.screenshot('login-to-app')
  })

})
