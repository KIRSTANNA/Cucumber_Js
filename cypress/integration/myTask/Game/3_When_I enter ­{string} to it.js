import { When } from "cypress-cucumber-preprocessor/steps";

When(`I enter ­{string} to it`, (mySearch) => {
    cy.get('@inputSearch').clear();
    cy.wait(1000);
    cy.get('@inputSearch').should('have.value', '');

    cy.get('@inputSearch').type(mySearch);
    cy.wait(1000);
    cy.get('@inputSearch').should('have.value', mySearch);
  });