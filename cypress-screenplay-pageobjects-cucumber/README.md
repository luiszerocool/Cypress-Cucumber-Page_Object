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

## Project Structure

```
cypress/
    fixtures
    integration/
        page_objects/
            logout.spec.js
            pay.spec.js
        sreenplay/
            pay.stepdefinitions.js 
            logout.stepdefinitions.js
        screenplay.feature
        page_objects.feature
    page_objects/
        BillPaymentPage.js
        HomePage.js
        OverviewPage.js
    plugins/
        index.js
    screenplay/
        questions/
            LogoutResponse.js
            PayResponse.js
        screen/
            BillPaymentPage.js
            HomePage.js
            OverviewPage.js
        task/
            Login.js
            Logout.js
            Open.js
            Pay.js
    support/
        commands.js
        index.js
```
