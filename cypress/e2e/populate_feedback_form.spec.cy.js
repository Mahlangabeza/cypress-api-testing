describe("Send the feedback form", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com");
    cy.contains("Feedback").click();
    cy.url().should("contain", "feedback");
  });
  it("should populate the form", () => {
    cy.get("#name").type("Test");
    cy.get("#email").type("Test@example.com");
    cy.get("#subject").type("Test subject");
    cy.get("#comment").type("These are the comments");
  });
  it("should submit the form", () => {
    cy.contains("Send Message").click();
    cy.contains("Feedback").should("be.visible");
  });
});
