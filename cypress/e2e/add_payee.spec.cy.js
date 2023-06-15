describe("Add payee details", () => {
  before(() => {
    cy.clearCookies();
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.contains("Signin").click();
    cy.fixture("users").then((user) => {
      const username = user.username;
      const password = user.password;

      cy.login(username, password);
    });
  });
  it('should "Add New Payee"', () => {
    cy.contains("Pay Bills").click();
    cy.contains("Add New Payee").click();
    cy.get("#np_new_payee_name").type("Payee Test name");
    cy.get("#np_new_payee_address").type("New payee address");
    cy.get("#np_new_payee_account").type(
      Math.trunc(Math.random() * 999999) + 11111
    );
    cy.get("#add_new_payee").click();
  });
  it("should show a successful message", () => {
    cy.get("#alert_content")
      .should("be.visible")
      .and(
        "contain",
        "The new payee Payee Test name was successfully created."
      );
  });
});
