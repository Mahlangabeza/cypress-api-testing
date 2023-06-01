describe("Keyboard simulation", () => {
  it("Keyboard simulation", () => {
    cy.visit("http://zero.webappsecurity.com/index.html");
    cy.get("#searchTerm").type("Some text {enter}");
  });
});
