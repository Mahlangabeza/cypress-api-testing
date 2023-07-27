class AccountLinks {
	static clickOnAccountActivity() {
		cy.get('[id="account_activity_tab"]').click()
	}
	static clickOnTransferFunds() {
		cy.get('[id="transfer_funds_tab"]').click()
	}
	static clickOnPayBills() {
		cy.get('[id="pay_bills_tab"]').click()
	}
	static clickOnMyMoneyMap() {
		cy.get('[id="money_map_tab"]').click()
	}
	static clickOnOnlineStatements() {
		cy.get('[id="online_statements_tab"]').click()
	}
}
export default AccountLinks
