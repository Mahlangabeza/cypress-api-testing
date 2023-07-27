class BasePages {
	static pause(milliseconds) {
		cypress.wait(milliseconds)
	}

	static logInformation(message) {
		cy.log(message)
	}

	static setMobileViewPort() {
		cy.setMobileViewPort('iPhone-11')
	}

	static setTabletViewPort() {
		cy.setMobileViewPort('iPad-2')
	}

	static setDesktopViewPort() {
		cy.setDesktopView('macbook-13')
	}

	static setLargeDesktopViewPort() {
		cy.setDesktopView(1980, 1080)
	}
}
export default BasePages
