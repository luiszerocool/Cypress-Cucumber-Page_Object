# Cypress and Cucumber

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

## Cucumber in Cypress

Documentation: https://www.npmjs.com/package/cypress-cucumber-preprocessor

---------------------------------------------------------------------------
install cucumber-reporcessor
```
npm install --save-dev cypress-cucumber-preprocessor
```
---------------------------------------------------------------------------
add to `cypress/plugins/index.js` this:
```js
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```
---------------------------------------------------------------------------
add to `cypress.json` this:
```json
{
  "testFiles": "**/*.feature"
}
```
---------------------------------------------------------------------------
add to `package.json` this:
```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```
---------------------------------------------------------------------------
add to `cypress/integration/google.feature` this:
```
# Language: es
# Author: Luis Vanegas <xlavm>
Feature: Google Main Page
  I want to open a search engine
  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title
```
---------------------------------------------------------------------------
add to `cypress/integration/google/google.spec.js` this:
```js
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})
Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})
```