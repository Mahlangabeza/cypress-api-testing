declare namespace Cypress {
  interface Chainable {
    visitHomePage(): Chainable<Element>
    visitLoginPage(): Chainable<Element>
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
