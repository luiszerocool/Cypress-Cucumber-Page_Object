# Cypress with Screenplay and Page Objects

## Project Structure

```
cypress/
    fixtures
    integration/
        pageobjects/
            logout.spec.js 
            pay.spec.js 
        sreenplay/
            logout.stepdefinitions.js 
            pay.stepdefinitions.js 
    page_objects/
        BillPaymentPage.js
        HomePage.js
        OverviewPage.js
    plugins
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
    support
```


