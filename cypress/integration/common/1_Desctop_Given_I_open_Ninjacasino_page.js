import { Given } from "cypress-cucumber-preprocessor/steps";

Given(`I open Ninjacasino page`, {tag: `@desctop`}, () => {
    cy.visit(Cypress.config().baseUrl), {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true
      },
      onLoad (contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === 'object').to.be.true

        cy.url()
        .should('include', Cypress.config().baseUrl);
    
        cy.title()
        .should("include", "Ninja Casino");
    
        cy.contains(`LOG IN`);
      },
    };
});