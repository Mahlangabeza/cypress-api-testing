import { login_password, login_username, url } from '../../config'
import AccountLinks from '../page-objects/components/accountLinks'
import NavBar from '../page-objects/components/navBar'
import Login from '../page-objects/pages/loginPage'

describe('Ensure that the Account links are still working', () => {
	before(() => {
		cy.clearAllCookies()
		cy.visit(url)
		NavBar.clickOnSignIn()
		Login.login(login_username, login_password)
	})
	after(() => {
		NavBar.logout()
	})
	it('should click on all the account links', () => {
		AccountLinks.clickOnAccountActivity()
		AccountLinks.clickOnMyMoneyMap()
		AccountLinks.clickOnOnlineStatements()
		AccountLinks.clickOnPayBills()
		AccountLinks.clickOnTransferFunds()
	})
})
