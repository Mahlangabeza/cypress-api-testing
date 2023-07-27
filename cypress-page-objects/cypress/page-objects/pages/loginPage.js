import BasePages from '../BasePage'

class Login extends BasePages {
	static login(username, password) {
		cy.login(username, password)
	}

	static clickOnForgotPasswordLink() {
		cy.contains('Forgot your password ?').click()
	}

	static displayErrorMessage() {
		cy.isVisible('.alert-error').should('be.visible')
	}
}

export default Login
