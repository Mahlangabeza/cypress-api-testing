describe('Login using a custom command', () => {
  it('should login using a custom command', () => {
    cy.visitLoginPage()
    cy.fixture('login').then(({ username, password }) => {
      cy.login(username, password)
    })
  })
})
