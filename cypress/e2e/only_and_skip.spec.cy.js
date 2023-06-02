describe("Skip and only", () => {
  it.skip("Should visit facebook", () => {
    cy.visit("https://facebook.com");
  });
  it.only("Should visit google", () => {
    cy.visit("https://google.com");
  });
});
