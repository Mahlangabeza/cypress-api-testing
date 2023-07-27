class NavBar {
	static clickOnLogo() {
		cy.get('.brand').click()
	}

	static search(textToSearch) {
		cy.get('#searchTerm').type(`${textToSearch} {enter}`)
	}

	static clickOnSignIn() {
		cy.get('#signin_button').click()
	}

	static logout() {
		cy.contains('username').click()
		cy.contains('Logout').click()
	}
}
export default NavBar
