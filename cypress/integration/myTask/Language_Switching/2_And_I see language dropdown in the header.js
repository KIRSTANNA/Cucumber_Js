import { And } from "cypress-cucumber-preprocessor/steps";

And(`I see language dropdown in the header`, () => {
    cy.get('.sc-cfJLRR').as(`header`)
        .find('.sc-fTQvRK')
        .as('langugeSwitcher')
        .should(`be.visible`);
});
