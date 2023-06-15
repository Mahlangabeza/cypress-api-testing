describe("Send payment", () => {
  before(() => {
    cy.clearCookies();
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.fixture("users").then((user) => {
      const username = user.username;
      const password = user.password;
      cy.login(username, password);
    });
  });
  it("should send payment", () => {
    cy.contains("Pay Bills").click();
    cy.contains("Pay Saved Payee").click();
    cy.get("#sp_payee").select("bofa");
    cy.get("#sp_account").select("5");
    cy.get("#sp_amount").type(5000);
    cy.get("#sp_date").type("2023-03-10 {enter}");
    cy.get("#sp_description").type("Test");
    cy.get("#pay_saved_payees").click();
  });
  it("should show the successful message", () => {
    cy.get("#alert_content")
      .should("be.visible")
      .and("contain", "The payment was successfully submitted.");
  });
});
