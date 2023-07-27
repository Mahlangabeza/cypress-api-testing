import { url, login_username, login_password } from '../../config'
import NavBar from '../page-objects/components/navBar'
import Login from '../page-objects/pages/loginPage'

describe('Login failed test', () => {
	before(() => {
		cy.visit(url)
		NavBar.clickOnSignIn()
	})
	it('should try to login with invalid credentials', () => {
		Login.login('invalid username', 'invalid password')
	})
	it('should display the error message', () => {
		Login.displayErrorMessage()
	})
})
describe('Successful login', () => {
	before(() => {
		cy.visit(url)
		NavBar.clickOnSignIn()
	})
	it('should login succesfully', () => {
		Login.login(login_username, login_password)
	})
	it('should logout', () => {
		NavBar.logout()
	})
})
