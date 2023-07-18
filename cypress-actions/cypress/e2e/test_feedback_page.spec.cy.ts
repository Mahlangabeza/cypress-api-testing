describe('Test the feedback page', () => {
  it('should the a message from the feedback page', () => {
    cy.visitFeedBackPage()
    cy.fixture('feedbackData').then(({ name, email, subject, message }) => {
      cy.testFeedBackPage(name, email, subject, message)
    })
  })
})
