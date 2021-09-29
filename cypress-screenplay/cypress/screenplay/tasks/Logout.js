/// <reference types="cypress" />
import * as OverviewPagePage from '../screen/OverviewPage';

export function linkClick(){
  cy.contains(OverviewPagePage.LOGOUT_LINK).click()
}
