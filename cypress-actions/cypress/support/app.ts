declare namespace Cypress {
  interface Chainable {
    /**
     * Navigates to the Home Page of the application
     */
    visitHomePage(): Chainable<Element>
    /**
     * Navigates to the Login Page of the application
     */
    visitLoginPage(): Chainable<Element>
    /**
     * Navigates to the Feed back page of the application
     */
    visitFeedBackPage(): Chainable<Element>
  }
}

Cypress.Commands.add('visitHomePage', () => {
  cy.visit('http://zero.webappsecurity.com/')
})

Cypress.Commands.add('visitLoginPage', () => {
  cy.visit('http://zero.webappsecurity.com/login.html')
})

Cypress.Commands.add('visitFeedBackPage', () => {
  cy.visit('http://zero.webappsecurity.com/feedback.html')
})
