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