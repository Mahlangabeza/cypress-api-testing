import FeedBackPage from '../page-objects/pages/feedbackPage'

describe('Submit the feedback form', () => {
	before(() => {
		FeedBackPage.loadFeedBackPage()
	})
	it('should submit the feedback form', () => {
		FeedBackPage.submitFeedbackForm()
	})
})
