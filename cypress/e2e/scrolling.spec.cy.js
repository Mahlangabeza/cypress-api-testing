describe("Scrolling up and down a page", () => {
  it("should scroll up and down", () => {
    cy.visit("https://devexpress.github.io/testcafe/example/");
    cy.wait(3000);
    cy.get("#submit-button").scrollIntoView();
    cy.wait(3000);
    cy.get("header").scrollIntoView();
  });
});
