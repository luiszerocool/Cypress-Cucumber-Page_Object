import * as HomePage from '../screen/HomePage';

export function theHomePage(){
  cy.visit(HomePage.HOMEPAGE_URL);
}