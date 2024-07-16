/// <reference types="cypress" />

describe('Valida que é possivel interagir com a pagina da Buger Eats', () => {

  beforeEach(() => {
    cy.visit('https://buger-eats.vercel.app/');
  })

  it('É possivel preencher os campos com informações', () => {
    cy.visit('https://buger-eats.vercel.app/');

    cy.get('[href=\"/deliver\"]').click();

    cy.get('[name=name]')
      .type('Test User');

    cy.get('[name=cpf]')
      .type('15475852855');

    cy.get('[name=email]')
      .type('test.user@testmail.com');

    cy.get('[name=whatsapp]')
      .type('(012)1 1234-5678');

    cy.get('[name=postalcode]')
      .type('23812-310');

    cy.get('[value=\"Buscar CEP\"]')
      .click();

    cy.get('[name=address-number]')
      .type('209');

    cy.get('[name=address-details]')
      .type('Apartamento');

    cy.get('[alt=Moto]')
      .click();

    cy.get('[class=dropzone]')
      .selectFile('/home/mateus/Downloads/WhatsApp Image 2024-07-12 at 14.17.07.jpeg',
        {action: 'drag-drop'});

    cy.get('[class=button-success]').click();

    cy.get('[role=dialog]').contains('Aí Sim...')

    cy.get('[class=\'swal2-confirm swal2-styled\']')
      .should('be.visible')
      .click();

    cy.title('Buger Eats');
  })

  it('Valida que não é possivel seguir em frente com o cpf invalido', () => {
    cy.get('[href=\"/deliver\"]').click();

    cy.get('[name=name]')
      .type('Test User');

    cy.get('[name=cpf]')
      .type('154.758.528-55');

    cy.get('[name=email]')
      .type('test.user@testmail.com');

    cy.get('[name=whatsapp]')
      .type('(012)1 1234-5678');

    cy.get('[name=postalcode]')
      .type('23812-310');

    cy.get('[value=\"Buscar CEP\"]')
      .click();

    cy.get('[name=address-number]')
      .type('209');

    cy.get('[name=address-details]')
      .type('Apartamento');

    cy.get('[alt=Moto]')
      .click();

    cy.get('[class=dropzone]')
      .selectFile('/home/mateus/Downloads/WhatsApp Image 2024-07-12 at 14.17.07.jpeg',
        {action: 'drag-drop'});

    cy.get('[class=button-success]').click();

    cy.get('[class=alert-error]')
      .should('be.visible')
      .contains('Oops! CPF inválido');
  })
})