# Cypress

Automation projects development in Cypress

## Prerequsites

- node js

## Create Project
```
# install 
npm install cypress

# open
npx cypress open

# package.json init
npm init
```

## timeouts 

* Global timeout in `cypress.json`:
```JSON
{
  "defaultCommandTimeout":10000
}
```

```js
cy.get('#input-text', {timeout: 6000}).type('write this text')

cy.wait(6000)

cy.wait('@alias').its('response.statusCode').should('eq', 200)

```

## Assertions
```js

// IMPLICIT ASSERTIONS

// Should

cy.get('#query-btn')
  .should('contain', 'button')
  .should('have.class', 'query-btn')
          //have.text
          //have.html
  .should('be.visible')
          //be.selected
          //be.disable
          //be.focused igual a have.focus
  .should('be.enable')

cy.get('#query-btn').invoke('attr', 'id')
  .should('equal', 'query-btn')

cy.get('#query-btn')
  .should('contain', 'button')
  .and('have.class', 'query-btn')

// EXPLICIT ASSERTIONS

// Expect

let name = 'luis'
expect(name).to.be.equal('luis')
          //to.not.equal()
          //to.be.a('string')
          //to.be.true
          //to.be.false
          //to.be.null
          //to.exist

//Assert

assert.equal(4, 5, 'this value is not equal')
    //.notEqual
    //.strictEqual
    //.isAbove
    //.isBelow
    //.exists
    //.notExists
    //.true
    //.false
    //.isString
    //.isNotString
    //.isNumber
    //.isNotNumber


```

## desktop version test

Add in the `cypress.json` file:

```JSON
{
    "viewportWidth": 1360,
    "viewportHeight": 768
}
```

## Errors Solutions

> The following error originated from your application code, not from Cypress. It was caused by an unhandled promise rejection.
### Solución: 

Add in the `support/index.js` file:

```js
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
```