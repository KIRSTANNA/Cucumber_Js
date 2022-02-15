import { Given } from "cypress-cucumber-preprocessor/steps";

Given(`I open Ninjacasino page for mobile`,  {tag: `@mobile`}, () => {
  cy.visit(Cypress.config().baseUrl, {setTimeout: 50000}); // increase total time for the visit to resolve
  cy.url()
  .should('include', Cypress.config().baseUrl);

  cy.title()
  .should("include", "Ninja Casino");

  cy.contains(`LOG IN`);
});