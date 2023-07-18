describe('Login using a custom command', () => {
  it('should login using a custom command', () => {
    cy.visitLoginPage()
    cy.waitForSeconds(5)
    cy.fixture('login').then(({ username, password }) => {
      cy.login(username, password)
    })
  })
})
