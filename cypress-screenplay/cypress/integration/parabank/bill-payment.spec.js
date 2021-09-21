/// <reference types="cypress" />

import * as Abrir from '../../screenplay/tasks/Abrir'
import * as Ingresar from '../../screenplay/tasks/Ingresar'
import * as RegistrarPago from '../../screenplay/tasks/RegistrarPago'
import * as LaRespuesta from '../../screenplay/questions/LaRespuesta'

describe('Screenplay - Add products to card and buy', () => {
  it('should be able to add a product to the cart', () => {

	//task
    Abrir.laPaginaDeInicio();
	Ingresar.aLaPaginaDeUsuario();
	RegistrarPago.enPagosDeFactura();
	//question
	LaRespuesta.alRegistroDelPagoDeFacturaEs();

  });

});