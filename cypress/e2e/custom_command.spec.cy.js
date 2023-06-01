describe("Custom commands", () => {
  it("Should login with custom commands", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.login("username", "password");
  });
});
