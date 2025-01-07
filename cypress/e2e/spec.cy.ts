/// <reference types="Cypress" />

describe("tasks page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("should load the home page successfully", () => {
    cy.contains("เที่ยวไหนดี").should("be.visible");
  });

  it("should have a search input", () => {
    cy.get('input[name="keyword"]').should("be.visible").type("ทะเล");
    cy.url().should((url) => {
      expect(decodeURIComponent(url)).to.include("/ทะเล");
    });
  });

  it("should display trips data", () => {
    cy.get('div').contains("หมวด").should("be.visible");
  });
});
