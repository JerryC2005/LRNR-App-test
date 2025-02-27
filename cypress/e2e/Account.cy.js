/// <reference types="cypress" />

describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Renders Home Hero button', () => {
    cy.get('button').should('contain', 'Begin Journey');
  });
})

describe("The Account Page", () => {
  beforeEach(() => {
    cy.visit("/account");
  }
  );

  it('Renders Page title', () => {
    cy.get("h2").should("contain", "Account");;
  });

  it('Render Fire Logo on streak page', () => {
    cy.get('span').should('contain', '🔥')
  })

  it('Render platinum quiz subtitle', () => {
    cy.get('h3').should('contain', 'Platinum Quizzes')
  })

  it('Render Navbar', () => {
    cy.get('nav')
  })
  
});
