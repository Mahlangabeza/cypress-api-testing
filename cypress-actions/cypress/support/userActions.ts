declare namespace Cypress {
  interface Chainable {
    /**
     * @param username - takes the username
     * @param password - takes the user password
     */
    login(username: string, password: string): Chainable<Element>
    /**
     *
     * @param name  - takes the name of the user
     * @param email  - email of the user
     * @param subject  - subject of the message to be sent
     * @param message  - message that the user wants to send
     */
    testFeedBackPage(
      name: string,
      email: string,
      subject: string,
      message: string
    ): Chainable<Element>
  }
}

Cypress.Commands.add('login', (username, password) => {
  cy.clearCookies()
  cy.get('#user_login').type(username)
  cy.get('#user_password').type(password)
  cy.contains('Sign in').click()
})

Cypress.Commands.add('testFeedBackPage', (name, email, subject, message) => {
  cy.get('#name').type(name)
  cy.get('#email').type(email)
  cy.get('#subject').type(subject)
  cy.get('#comment').type(message)
  cy.contains('Send Message').click()
})
