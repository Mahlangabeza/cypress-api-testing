describe("Ensuring that the navbar links works", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/index.html");
  });
  it('should click on the "Online Banking" link', () => {
    cy.contains("Online Banking").click();
    cy.url().should("include", "online-banking.html");
    cy.get("h1").should("be.visible");
  });
  it('should click on the "Feedback", link', () => {
    cy.contains("Feedback").click();
    cy.url().should("include", "feedback.html");
  });
  it("should go back to the home page", () => {
    cy.contains("Zero Bank").click();
    cy.url().should("include", "index.html");
  });
});
