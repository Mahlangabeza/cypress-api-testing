describe("Getting data", () => {
  it("Should pull data from the json file", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.fixture("users").then((data) => {
      cy.log("DATA: ", data);
      cy.log(data.username);
      cy.get("#user_login").type(data.username);
      cy.get("#user_password").type(data.password);
      cy.get('input[name="submit"]').click();
    });
  });
});
