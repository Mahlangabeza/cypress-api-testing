describe("Using a before and after hook", () => {
  before(() => {
    cy.visit("https://www.linkedin.com");
  });
  after(() => {
    cy.clearCookies();
  });
  it("should ensure that the page is loaded correctly", () => {
    cy.url().should("contain", "linkedin");
  });
});
