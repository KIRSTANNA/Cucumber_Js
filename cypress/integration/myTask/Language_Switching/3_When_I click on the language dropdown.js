import { When } from "cypress-cucumber-preprocessor/steps";

When(`I click on the language dropdown`, () => {    
    cy.get('@langugeSwitcher')
    .click();
});
