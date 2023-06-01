const { before, after } = require("cypress/types/lodash");

class HomeBase {
  static loadPage() {
    cy.visit("https://devexpress.github.io/testcafe/example/");
  }
  static wait(seconds) {
    cy.wait(seconds);
  }
}

class Scrolling extends HomeBase {
  static scrollDown() {
    cy.get("#submit-button").scrollIntoView();
  }
  static scrollUp() {
    cy.get("header").scrollIntoView();
  }
}

describe("Scrolling up and down a page", () => {
  it("should scroll up and down", () => {
    Scrolling.loadPage();
    Scrolling.wait(3000);
    Scrolling.scrollDown();
    Scrolling.wait(3000);
    Scrolling.scrollUp();
  });
});
