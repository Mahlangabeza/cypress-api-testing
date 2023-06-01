describe("Taking different type of screenshots in a page", () => {
  it("should take a full page screenshot", () => {
    cy.visit("https://devexpress.github.io/testcafe/example/");
    cy.screenshot({ capture: "fullPage" });
  });
  it("should take a screenshot of an element", () => {
    cy.get("header").screenshot();
  });
});
