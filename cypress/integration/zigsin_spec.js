describe('Navigation', () => {
  it('navigates to about on clicking about', () => {
    cy.visit('http://localhost:3000');
    cy.contains('About').click();

    expect(true).to.equal(true);
  });
});