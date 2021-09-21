import * as HomePage from '../ui/HomePage';

export function laPaginaDeInicio(){

  let s = 'Arbir.laPaginaDeInicio';
  cy.log(s);
  cy.log(s);

  cy.visit(HomePage.HOMEPAGE_URL);
}