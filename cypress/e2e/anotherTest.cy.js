describe('Tentando acessar o sauce labs', () => {
  it('Valida que é possibel interagir com minha aplicação', () => {
    cy.visit('https://google.com');

    cy.get('[id=APjFqb]').type('Hello world');
  })
})