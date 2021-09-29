import * as HomePage from '../screen/HomePage';

export function ofUserSession(){
	cy.get(HomePage.USER_FIELD).should('be.visible')
}