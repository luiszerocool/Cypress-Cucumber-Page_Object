/// <reference types="cypress" />
module.exports = {
  FIRSTNAME_FIELD: ':nth-child(1) > [width="20%"] > .input',
  ADDRESS_FIELD: ':nth-child(2) > [width="20%"] > .input',
  CITY_FIELD: ':nth-child(3) > [width="20%"] > .input',
  STATE_FIELD: ':nth-child(4) > [width="20%"] > .input',
  ZIPCODE_FIELD: ':nth-child(5) > [width="20%"] > .input',
  PHONENUMBER_FIELD: ':nth-child(6) > [width="20%"] > .input',
  ACCOUNTNUMBER_FIELD: ':nth-child(8) > :nth-child(2) > .input',
  VERIFYACCOUNTNUMBER_FIELD: ':nth-child(9) > [width="20%"] > .input',
  AMOUNT_FIELD: ':nth-child(11) > [width="20%"] > .input',
  FROMACCOUNTNUMBER_FIELD: ':nth-child(13) > :nth-child(2) > .input',
  RESULT_LABEL: '[ng-show="showResult"] > .title',
}