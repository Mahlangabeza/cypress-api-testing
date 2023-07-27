class FeedBackPage {
	static loadFeedBackPage() {
		cy.visit('http://zero.webappsecurity.com/feedback.html')
		cy.url().should('contain', 'feedback')
	}

	static submitFeedbackForm() {
		cy.fixture('feedback').then((data) => {
			cy.get('#name').type(data.name)
			cy.get('#email').type(data.email)
			cy.get('#subject').type(data.subject)
			cy.get('#comment').type(data.body)
			cy.contains('Send Message').click()
			cy.get('#feedback-title').should('be.visible')
		})
	}
}
export default FeedBackPage
