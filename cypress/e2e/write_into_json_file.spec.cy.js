describe("create a json file", () => {
  it("should create a json file", () => {
    cy.writeFile("log.json", { name: "Martin", lastName: "Mahlangabeza" });
  });

  it("should create a text file", () => {
    cy.writeFile(
      "log.text",
      "The content of this file were created using cypress."
    );
  });
});
