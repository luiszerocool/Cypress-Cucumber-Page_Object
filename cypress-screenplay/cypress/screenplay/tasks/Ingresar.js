/// <reference types="cypress" />
import * as LoginPage from '../ui/LoginPage';

export function aLaPaginaDeUsuario(){
	
	cy.get(LoginPage.CAMPO_USER).type("luis")
    cy.get(LoginPage.CAMPO_PASS).type("luis {enter}")
	
  //cy.contains(name).parent().find("button").click();
}