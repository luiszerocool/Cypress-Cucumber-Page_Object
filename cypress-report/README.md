# Cypress and Mochawesome

## Requirements
- Node js
- Cypress Project

## Cypress Report

install mochawesome
```
npm install mochawesome --save  
```
---------------------------------------------------------------------------
add to `cypress.json` this:
```json
{
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": false,
    "json": true
  }
}
```
---------------------------------------------------------------------------
clean reports

if results directory and mochawesome.json file exist, then delete this files:
```
# in windows
rmdir /s /q cypress\results && del mochawesome.json

# in linux
rm -rf cypress/results mochawesome.json
```
---------------------------------------------------------------------------
execute the report
```
npx cypress run --reporter mochawesome
```
---------------------------------------------------------------------------
merge results in one file
```
npx mochawesome-merge "cypress/results/*.json" > mochawesome.json
```
---------------------------------------------------------------------------
consolidate report in html into of mochawesome-report/
```
npx marge mochawesome.json
```
