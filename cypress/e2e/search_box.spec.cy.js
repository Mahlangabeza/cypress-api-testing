describe("Should enter text in a search box and press enter", () => {
  before(() => {
    cy.visit("http://zero.webappsecurity.com/");
  });
  after(() => {
    cy.clearCookies();
  });
  it("should enter some text and then press enter", () => {
    cy.get("#searchTerm").type("Open an account {enter}");
  });
  it("should be navigated to the search result page", () => {
    cy.get("h2").contains("Search Results:");
  });
});
