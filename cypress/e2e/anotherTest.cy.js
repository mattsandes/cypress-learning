describe('Valida que é possivel interagir com o site do Ferreira Costa', () => {
  it('É possivel interagir com os produtos que estão na area de apresentação', () => {
    cy.visit('https://www.ferreiracosta.com/');

    cy.get('[id=searchProduct]').type('Cadeira tramontina');
    
    cy.get('[data-cy=searchh-product-hyperlink]').click();
    
    cy.get('[data-cy=button-close-modal-cookie]').click();
  })
})