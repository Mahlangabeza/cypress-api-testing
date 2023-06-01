describe("Read from a json and text file", () => {
  it("should read from a json file", () => {
    cy.readFile("log.json").its("name").should("eq", "Martin");
    cy.readFile("log.json").its("lastName").should("eq", "Mahlangabeza");
  });
  it("should read frrom the a text file", () => {
    cy.readFile("log.text").should(
      "eq",
      "The content of this file were created using cypress."
    );
  });
});
