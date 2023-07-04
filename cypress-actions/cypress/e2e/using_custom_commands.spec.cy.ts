describe('Testing the recently added custom commands', () => {
  it('should visit the "Home page"', () => {
    cy.visitHomePage()
  })

  it('should visit the "Login page"', () => {
    cy.visitLoginPage()
  })

  it('should visit the "Feedback page"', () => {
    cy.visitFeedBackPage()
  })
})
