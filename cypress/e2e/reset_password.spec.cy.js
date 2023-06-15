describe("Reset password", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/index.html");
  });
  after(() => {
    cy.clearCookies();
  });
  it("should click on the SignIn button", () => {
    cy.contains("Signin").click();
    cy.get("h3").contains("Log in to ZeroBank");
  });
  it('should click on the "forgot your password" link', () => {
    cy.contains("Forgot your password ?").click();
    cy.get("h3").contains("Forgotten Password");
  });
  it("should send password", () => {
    cy.get("#user_email").type("example@example.com");
    cy.contains("Send Password").click();
  });
});
