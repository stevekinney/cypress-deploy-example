describe('Create React App', () => {
  it('should contain a link to learning React', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('Learn Svelte');
  });
});
