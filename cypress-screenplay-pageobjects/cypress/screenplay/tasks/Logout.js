/// <reference types="cypress" />
import * as OverviewPagePage from '../screen/OverviewPage';

export function fromApplication(){
  cy.contains(OverviewPagePage.LOGOUT_LINK).click()
}
