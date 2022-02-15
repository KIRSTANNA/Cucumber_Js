import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`application reloads in {string}`, (language) => {

    cy.fixture(`Languages/${language}`).then(($language) => {

        cy.get(`@header`)
        .should(`contain`, $language.forHeader);
    
        cy.get(`@langugeSwitcher`)
        .should(`contain`, $language.forSwitcher);
    })
});
