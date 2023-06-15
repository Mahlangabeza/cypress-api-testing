describe("Login and out", () => {
  before(() => {
    cy.visit("zero.webappsecurity.com");
    cy.url().should("contain", "zero");
  });
  it("should attempt to login with invalid credentials", () => {
    cy.get("#signin_button").click();
    cy.contains("Log in to ZeroBank").should("be.visible");
    cy.get("#user_login").type("Test");
    cy.get("#user_password").type("Test@test.com");
    cy.get('[value="Sign in"]').click();
  });
  it("an error should be thrown", () => {
    cy.contains("Login and/or password are wrong.").should("be.visible");
  });
  it("should login with valid credentials", () => {
    cy.fixture("users").then((user) => {
      const username = user.username;
      const password = user.password;

      cy.get("#user_login").type(username);
      cy.get("#user_password").type(password);
      cy.get(".btn-primary").click();
      cy.url().should("contain", "bank");
    });
  });
  it("should logout", () => {
    cy.contains("username").click();
    cy.contains("Logout").click();
    cy.get("#signin_button").should("be.visible");
  });
});
