describe('NY Times Most Popular Articles', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/svc/mostpopular/v2/viewed/7.json?api-key=*', {
      fixture: 'articles.json',
    }).as('getArticles');
    cy.visit('http://localhost:3000/');
  });

  it('should display loading initially', () => {
    cy.contains('Loading...').should('be.visible');
  });

  it('should display articles after fetching', () => {
    cy.wait('@getArticles');
    cy.contains('Test Article 1').should('be.visible');
    cy.contains('Test Article 2').should('be.visible');
  });

  it('should display article details when an article is clicked', () => {
    cy.wait('@getArticles');
    cy.contains('Test Article 1').click();
    cy.contains('Back').should('be.visible');
    cy.contains('Abstract 1').should('be.visible');
    cy.contains('Read more').should('have.attr', 'href', 'http://example.com/1');
  });

  it('should go back to the article list when back is clicked', () => {
    cy.wait('@getArticles');
    cy.contains('Test Article 1').click();
    cy.contains('Back').click();
    cy.contains('Test Article 1').should('be.visible');
    cy.contains('Test Article 2').should('be.visible');
  });
});
