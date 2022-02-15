import { When } from "cypress-cucumber-preprocessor/steps";

When(`I click on EE`, () => { 
    cy.get(`@langugeSwitcher`).click();
    cy.get(':nth-child(2) > .sc-dvQaRk > .sc-fWCJzd > .sc-lhMiDA')
    .contains(`EESTI`)
    .click();
});
