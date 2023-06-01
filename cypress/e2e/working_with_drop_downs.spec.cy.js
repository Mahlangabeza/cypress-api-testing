describe("Working with drop downs", () => {
  it("Should load the page", () => {
    cy.visit("https://devexpress.github.io/testcafe/example/");
    cy.url().should("contain", "testcafe");
  });
  it("should select a drop down", () => {
    cy.get("#preferred-interface").select("Both");
    cy.get("#preferred-interface").should("have.value", "Both");

    cy.get("#preferred-interface").select("JavaScript API");
    cy.get("#preferred-interface").should("have.value", "JavaScript API");
  });
});
