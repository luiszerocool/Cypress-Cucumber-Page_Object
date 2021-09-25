/// <reference types="cypress" />
import * as HomePage from '../screen/HomePage';

export function toTheUserPageWith(user, pass){
	cy.get(HomePage.USER_FIELD).type(user)
  cy.get(HomePage.PASS_FIELD).type(pass + "{enter}")
  //cy.contains(name).parent().find("button").click();
}